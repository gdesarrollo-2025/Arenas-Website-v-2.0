import Image from "next/image";
import { Suspense } from "react";
import { unstable_cache } from "next/cache";

import { getReviews } from "@/shared/services/review.service"; // ajusta la ruta
import ReviewCarousel, { type Review } from "@/shared/components/ReviewCarousel";

const MIN_LENGTH = 30; // descarta reseñas de una palabra ("atencion")

/**
 * Se guarda en caché la lista completa (50) durante 1 hora.
 * El sorteo de 10 NO se hace aquí: si se hiciera en el servidor quedaría
 * congelado en la caché y todos verían las mismas 10 durante esa hora.
 */
const getCachedReviews = unstable_cache(
    async (): Promise<Review[]> => {
        const data: Review[] = await getReviews();
        return data.filter((r) => (r.content?.trim().length ?? 0) >= MIN_LENGTH);
    },
    ["home-reviews"],
    { revalidate: 3600, tags: ["reviews"] }
);

async function ReviewFetch() {
    const reviews = await getCachedReviews();
    if (reviews.length === 0) return null;
    return <ReviewCarousel reviews={reviews} />;
}

function ReviewSkeleton() {
    // Mismos cortes que los breakpoints del carrusel para evitar saltos de layout
    return (
        <div className="grid grid-cols-1 gap-5 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
                <div
                    key={i}
                    className={`h-80 animate-pulse rounded-lg bg-background shadow-md/50 ${
                        ["", "hidden sm:block", "hidden lg:block", "hidden xl:block"][i]
                    }`}
                />
            ))}
        </div>
    );
}

export default function ReviewSection() {
    return (
        <section className="relative container-large overflow-hidden py-10">
            {/* Decorativa: empieza debajo del encabezado para no quedar detrás del texto */}
            <div className="pointer-events-none absolute bottom-0 right-0 top-28 hidden w-1/2 md:block">
                <Image src="/hero-house.webp" alt="" fill className="rounded-[20px] object-cover" sizes="50vw" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-[85vw] flex-col gap-6">
                <header className="max-w-xl">
                    {/* Cambia text-2xl/4xl por el token de título de tus otras secciones */}
                    <h2 className="text-2xl font-semibold text-balance lg:text-4xl">
                        Nuestros clientes son nuestra mejor referencia
                    </h2>
                    <p className="mt-3 hidden text-body text-neutral-600 lg:block">
                        Mantenemos nuestro servicio con altos niveles de calidad, pero lo que realmente mide el éxito
                        es la satisfacción de quienes servimos. Nuestros clientes hablan por sí mismos.
                    </p>
                </header>

                <Suspense fallback={<ReviewSkeleton />}>
                    <ReviewFetch />
                </Suspense>
            </div>
        </section>
    );
}