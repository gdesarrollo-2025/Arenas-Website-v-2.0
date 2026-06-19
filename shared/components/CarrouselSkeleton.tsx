import { ReactNode } from "react";

type breakpoint= {
    tag: string,
    slidePerView: number;
}
type carrouselProps = {
    breakpoints: breakpoint[];
    width: number;
    height: number;
}
export default function CarrouselSkeleton({breakpoints, width, height}: carrouselProps){
    const views: ReactNode = []

    
    return <div className="w-full h-full">

    </div>
}