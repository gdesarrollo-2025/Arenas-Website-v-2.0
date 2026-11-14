
import { ReactNode } from "react";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import Image from "next/image";

type props = {
    image360?: boolean;
    images: string[];
    children: ReactNode;
    className: string;
}


export default function DisplayImages({ image360 = false, images, children, className }: props) {

    const visor = () => {
        if (!image360) {
            return <div className="w-full aspect 16/9 border-2 overflow-y-scroll">
                {images.map(i => (
                    <Image src={i} alt="titulo estandar" fill className="object-cover"/>
                ))}
            </div>
        } else {

        }
    }
    return <Dialog >
        <DialogTrigger className={className}>{children}</DialogTrigger>
        <DialogContent className="w-full  min-w-[80dvw]">

        </DialogContent>
    </Dialog>
}