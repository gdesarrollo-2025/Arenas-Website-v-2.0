'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type PaginationProps = {
    current: number;
    total: number;
};

type PageItem = number | "start-ellipsis" | "end-ellipsis";

/**
 * Devuelve siempre la misma cantidad de elementos (7) cuando hay muchas páginas,
 * así los botones no "saltan" de posición al navegar.
 *   current 1   de 186 -> 1 2 3 4 5 … 186
 *   current 50  de 186 -> 1 … 49 50 51 … 186
 *   current 185 de 186 -> 1 … 182 183 184 185 186
 * Se puede mover a shared/utils si se reutiliza.
 */
function getPageItems(current: number, total: number, siblings = 1): PageItem[] {
    const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);
    const maxItems = siblings * 2 + 5; // primera + última + actual + vecinos + 2 huecos

    if (total <= maxItems) return range(1, total);

    const left = Math.max(current - siblings, 1);
    const right = Math.min(current + siblings, total);
    // Solo se ponen "…" si ocultan 2 o más páginas (nunca "1 … 3")
    const showStartDots = left > 3;
    const showEndDots = right < total - 2;
    const edgeCount = 3 + siblings * 2;

    if (!showStartDots) return [...range(1, edgeCount), "end-ellipsis", total];
    if (!showEndDots) return [1, "start-ellipsis", ...range(total - edgeCount + 1, total)];
    return [1, "start-ellipsis", ...range(left, right), "end-ellipsis", total];
}

const base = "flex size-10 items-center justify-center rounded-md text-sm tabular-nums transition-colors";

export default function Pagination({ current, total }: PaginationProps) {
    const searchParams = useSearchParams();
    const path = usePathname();

    // current puede llegar como string desde searchParams
    const totalPages = Math.max(1, Number(total) || 1);
    const page = Math.min(Math.max(1, Number(current) || 1), totalPages);

    if (totalPages <= 1) return null;

    const hrefFor = (p: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(p));
        return `${path}?${params.toString()}`;
    };

    const items = getPageItems(page, totalPages);

    return (
        <nav aria-label="Paginación" className="flex w-full justify-center">
            <ul className="flex items-center gap-1 sm:gap-2">
                <li>
                    {page > 1 ? (
                        <Link href={hrefFor(page - 1)} className={`${base} w-auto gap-2 px-2 hover:bg-accent/20`} aria-label="Página anterior">
                            <FaChevronLeft aria-hidden className="size-3" />
                            <span className="hidden sm:inline">Anterior</span>
                        </Link>
                    ) : (
                        <span className={`${base} w-auto gap-2 px-2 text-neutral-300`} aria-hidden>
                            <FaChevronLeft className="size-3" />
                            <span className="hidden sm:inline">Anterior</span>
                        </span>
                    )}
                </li>

                {items.map((item) =>
                    typeof item === "number" ? (
                        <li key={item}>
                            {item === page ? (
                                <span aria-current="page" className={`${base} bg-primary font-semibold text-background`}>
                                    {item}
                                </span>
                            ) : (
                                <Link href={hrefFor(item)} className={`${base} hover:bg-accent/20`} aria-label={`Página ${item}`}>
                                    {item}
                                </Link>
                            )}
                        </li>
                    ) : (
                        <li key={item} aria-hidden className={`${base} text-neutral-400`}>
                            …
                        </li>
                    )
                )}

                <li>
                    {page < totalPages ? (
                        <Link href={hrefFor(page + 1)} className={`${base} w-auto gap-2 px-2 hover:bg-accent/20`} aria-label="Página siguiente">
                            <span className="hidden sm:inline">Siguiente</span>
                            <FaChevronRight aria-hidden className="size-3" />
                        </Link>
                    ) : (
                        <span className={`${base} w-auto gap-2 px-2 text-neutral-300`} aria-hidden>
                            <span className="hidden sm:inline">Siguiente</span>
                            <FaChevronRight className="size-3" />
                        </span>
                    )}
                </li>
            </ul>
        </nav>
    );
}