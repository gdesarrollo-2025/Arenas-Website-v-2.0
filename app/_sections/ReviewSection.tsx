import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { getReviews } from "@/shared/services/review.service";

import Carrousel from "@/shared/components/Carrousel";
import { Quote, Star } from "@/shared/components/Icons";
import Image from "next/image";

/* pasar a shared/helpers */
function randomizer(data: any[], length: number) {

    if (length > data.length) {
        throw new Error("length no puede ser mayor que data.length");
    }

    let randomData: any[] = [];
    while (randomData.length < length) {
        let random = Math.floor(Math.random() * data.length);
        let item = data[random];
        if (!randomData.some((i) => i.id == item.id)) {
            randomData.push(item)
        }
    }

    return randomData;
}

export default async function ReviewSection() {
    const data = await getReviews();
    const reviews = randomizer(data, 10);

    return <div className=" relative  max-w-[90vw] mx-auto  h-full lg:h-[80vh] flex flex-col gap-2 justify-center my-5 ">
        <div className="relative flex flex-col justify-around h-full max-w-[85vw] gap-5 mx-auto z-10">
            <div className="w-1/2">
                <h2 className="font-semibold text-balance ">Nuestros cliente son nuestra mejor referencia</h2>
                <p className="hidden lg:block">Mantenemos nuestro servicio con altos niveles de calidad pero lo que realmente mide el éxito es la satisfacción de aquellos a quienes servimos. Nuestros clientes hablan por si mismo</p>
            </div>
            <Carrousel className="w-full h-full" slideClassName="h-full px-1 py-5" modules={["navigation", "autoplay"]} speed={300} slidesPerView={1} spaceBetween={20} navigation={true} loop={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 3 }, 769: { slidesPerView: 4 }, 1025: { slidesPerView: 5} }}>
                {reviews.map((r: any) => (
                    <div key={r.id} className="flex flex-col justify-between  w-full min-h-60 h-full p-5 bg-background rounded-lg shadow-md/50">
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
        <div className="absolute h-full w-1/2 -right-20 ">
            <Image src="/hero-house.webp" alt="reviews image section" fill className="object-cover  w-1/2 rounded-[20px]" />
        </div>
    </div >
}