import Image from "next/image";

type props = {
    title: string;
    image: string;
}
export default function HeroSection({ title, image }: props) {
    return <section className="relative flex items-center justify-center lg:justify-start lg:items-end w-full h-[50dvh]">
        <Image src={image} fill alt="Imagen buscador" className="object-cover" preload={true} sizes="100vw" />
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-black/50 from-10% to-transparent backdrop-blur-[2px]"/>
        <h1 className="absolute lg:inset-s-[10%] lg:bottom-5 z-10 text-white font-semibold text-center">{title}</h1>
    </section>
}