import Image from "next/image";
import dynamic from "next/dynamic";

import { getReviews } from "@/shared/services/review.service";
import randomizer from "@/shared/utils/randomizer";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel"));
import Quote from "@/public/Quotes.svg";
import Star from "@/public/Star.svg";
import { Suspense } from "react";

async function ReviewFetch() {
    const data = await getReviews();
    const reviews = randomizer(data, 10);

    return <div className="relative w-full h-fit">
        <Carrousel className="w-full h-full" slideClassName="flex place-items-center h-full px-1 py-5" modules={["navigation", "autoplay"]} speed={300} slidesPerView={1} spaceBetween={20} navigation={true} loop={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 3 }, 769: { slidesPerView: 4 }, 1025: { slidesPerView: 5 } }}>
            {reviews.map((r: any) => (
                <div key={r.id} className="flex flex-col justify-between  w-full min-h-60 h-80 p-5 bg-background rounded-lg shadow-md/50">
                    <Quote className=" w-16 h-16" />
                    <p className="align-middle line-clamp-4 h-1/2 lowercase ">{r.content}</p>
                    <div className="flex items-center gap-2 w-fit">
                        <small className="font-bold">{r.name}</small>
                        <Star className="w-8" />
                    </div>
                </div>
            ))}
        </Carrousel >
    </div>
}

function ReviewSkeleton() {
    return <div>
        <div>
            <div className="hidden xl:grid grid-cols-5 gap-5 w-full h-full">
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
            </div>
            <div className="hidden lg:grid xl:hidden grid-cols-4 gap-5 w-full h-full">
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
            </div>
            <div className="hidden md:grid  lg:hidden grid-cols-3 gap-5 w-full h-full">
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
            </div>
            <div className="grid md:hidden grid-cols-1 gap-5 w-full h-full">
                <div className="place-self-center w-full min-h-60 h-80 rounded-lg shadow-md/50 bg-background animate-pulse"></div>
            </div>

        </div>
    </div>
}
export default function ReviewSection() {
    return <section className=" relative  max-w-[90vw] mx-auto  h-full  flex flex-col gap-2 justify-center my-5 ">
        <div className="relative flex flex-col justify-evenly h-full max-w-[85vw] gap-5 mx-auto z-10">
            <div className="w-1/2">
                <h2 className="font-semibold text-balance ">Nuestros cliente son nuestra mejor referencia</h2>
                <p className="hidden lg:block">Mantenemos nuestro servicio con altos niveles de calidad pero lo que realmente mide el éxito es la satisfacción de aquellos a quienes servimos. Nuestros clientes hablan por si mismo</p>
            </div>
            <Suspense fallback={<ReviewSkeleton />}>
                <ReviewFetch />
            </Suspense>

        </div>
        <div className="absolute h-full w-1/2 -right-20 ">
            <Image src="/hero-house.webp" alt="reviews image section" fill className="object-cover  w-1/2 rounded-[20px]" sizes="50vw" />
        </div>
    </section >
}