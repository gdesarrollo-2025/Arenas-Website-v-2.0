'use client'
import { Children, ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Parallax, Autoplay, Controller } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";

import type { AutoplayOptions, Swiper as SwiperType, SwiperOptions } from "swiper/types";
import { SwiperModule } from "swiper/types";

const Modules = {
    'navigation': Navigation,
    'parallax': Parallax,
    'autoplay': Autoplay,
    'controller': Controller,
}

type SwiperModuleName = keyof typeof Modules;

/* tienen classNamr */
type CarrouselProps = {
    children: ReactNode,
    modules: SwiperModuleName[],
    speed: number,
    spaceBetween: number,
    slidesPerView: number | 'auto',
    loop: boolean,
    navigation: boolean | SwiperOptions['navigation'],
    autoplay?: AutoplayOptions | boolean,
    breakpoints?: SwiperOptions['breakpoints'],
    className?: string,
    slideClassName?: string,
}
export default function Carrousel({ children, modules, speed, spaceBetween, slidesPerView, loop, navigation, autoplay, breakpoints, className, slideClassName }: CarrouselProps) {

    const modulesApplied: SwiperModule[] = modules.map((m) => Modules[m]);

    const swiperRef = useRef<SwiperType | null>(null)

    return <div className="relative">
        <button onClick={() => swiperRef.current?.slidePrev()} className="absolute top-1/2 left-5 aspect-square h-auto rounded-full bg-accent z-10"> prev</button>
        <Swiper
            modules={modulesApplied}
            speed={speed}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop={loop}
            navigation={false}
            autoplay={autoplay}
            breakpoints={breakpoints}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            className={className}
        >
            {Children.map(children, (child, idx) => (
                <SwiperSlide key={idx} className={slideClassName}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()} className="absolute top-1/2 right-5 aspect-square h-auto rounded-full bg-accent z-10 border-2"> next</button>
    </div>

}