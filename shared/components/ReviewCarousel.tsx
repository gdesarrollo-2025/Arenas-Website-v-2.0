'use client'
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaStar } from "react-icons/fa6";

import randomizer from "@/shared/utils/randomizer";
import Quote from "@/public/Quotes.svg";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel"));

export type Review = {
    id: string | number;
    content: string;
    name?: string | null;
    score: number; // 8 a 10
};

const VISIBLE = 10;

// "EXCELENTE SERVICIO" -> "Excelente servicio"; "excelente servicio! julio..." -> "Excelente servicio! julio..."
function toSentenceCase(text: string) {
    const clean = text.trim().replace(/\s+/g, " ");
    const base = clean === clean.toUpperCase() ? clean.toLowerCase() : clean;
    return base.charAt(0).toUpperCase() + base.slice(1);
}

// "jasay balentina PIÑERES" -> "Jasay Balentina Piñeres"
function toTitleCase(text: string) {
    return text.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());
}

function initials(name: string) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function Stars({ score }: { score: number }) {
    const value = Math.round(score / 2); // escala 10 -> 5
    return (
        <div className="flex gap-0.5" role="img" aria-label={`Calificación ${value} de 5`}>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} aria-hidden className={`size-3 ${i < value ? "text-accent" : "text-neutral-300"}`} />
            ))}
        </div>
    );
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
    // El HTML del servidor muestra las primeras 10; al montar se sortean en el navegador.
    // Así la página sigue estática y cada visita ve reseñas distintas, sin error de hidratación.
    const [items, setItems] = useState(() => reviews.slice(0, VISIBLE));
    const [round, setRound] = useState(0);

    useEffect(() => {
        setItems(randomizer(reviews, VISIBLE));
        setRound((n) => n + 1); // nueva key: Swiper se reinicia con el nuevo orden (necesario con loop)
    }, [reviews]);

    return (
        <Carrousel
            key={round}
            className="w-full"
            slideClassName="flex h-full px-1 py-5"
            modules={["navigation", "autoplay"]}
            speed={300}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            loop={items.length > 4}
            autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
        >
            {items.map((r) => {
                const name = r.name?.trim() ? toTitleCase(r.name.trim()) : "Cliente Arenas";
                return (
                    <figure key={r.id} className="flex h-80 w-full flex-col rounded-lg bg-background p-5 shadow-md/50">
                        <Quote aria-hidden className="size-8 shrink-0 text-accent" />
                        <blockquote className="mt-4 line-clamp-5 text-body">{toSentenceCase(r.content)}</blockquote>

                        {/* mt-auto: el autor queda siempre abajo, sin importar el largo del texto */}
                        <figcaption className="mt-auto flex items-center gap-3 pt-4">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-caption font-semibold text-background">
                                {initials(name)}
                            </span>
                            <div className="min-w-0">
                                <p className="truncate text-caption font-semibold" title={name}>{name}</p>
                                <Stars score={r.score} />
                            </div>
                        </figcaption>
                    </figure>
                );
            })}
        </Carrousel>
    );
}