'use client'
import ReactPannellum from "react-pannellum";
import { useState } from "react";
import { ReactNode } from "react";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import Image from "next/image";

type props = {
    image360?: boolean;
    images: string[];
    children: ReactNode;
    className: string;
}

function Visor360({ src, id}: { src: string, id: number}) {
    return <ReactPannellum key={id} id="visor-360" sceneId="escena" imageSource={src} config={{ autoLoad: true }} style={{ width: "100%", height: "100%" }} />
}

export default function DisplayImages({ image360 = false, images, children, className }: props) {

    const [id, setId] = useState(0);

    return <Dialog >
        <DialogTrigger className={className}>{children}</DialogTrigger>
        <DialogContent className="flex flex-col gap-0 w-full h-[90svh] min-w-[80dvw] p-8 ">
            <div className="grow rounded-t-[40px] overflow-hidden">
                {image360 ? (
                    <Visor360 src={images[id]} id={id}/>
                ) : (
                    <div className="relative w-full h-full">
                        <Image src={images[id]} alt="titulo estandar" fill className="object-cover" />
                        <Image src={images[id]} alt="titulo estandar" fill className="backdrop-blur-sm bg-accent/40 object-contain" />
                    </div>
                )}
            </div>
            <div className="relative grid grid-cols-15 grid-rows-1 h-1/10">
                {images.map((i, idx) => (
                    <button key={idx} className={`relative flex items-center w-full h-full ${id == idx ? "border-2 border-primary " : ""} transition-colors duration-150`} onClick={() => setId(idx)}>
                        <Image src={i} alt="titulo estandar" fill className="object-cover" />
                        <div className={`${id == idx ? "bg-accent/40" :"bg-transparent"} w-full h-full z-10 transition-colors duration-150`}/>
                    </button>
                ))}
            </div>
        </DialogContent>
    </Dialog>
}