import formatPrice from "@/shared/utils/formatPrice"
import Script from "next/script"

type props = {
    code: number,
    biz: string,
    price: string[],
    administration: number,
}

export default function PriceInformationSection({ code, biz, price, administration }: props) {
    let titlePrice, totalPrice
    if (biz === "ARRIENDO") {
        titlePrice = "Canon mensual"
        totalPrice = Number(price[0]) + administration
    } else if (biz === "VENTA") {
        titlePrice = "Precio de venta"
    } else {
        titlePrice = "Canon mensual / Precio de venta"
        totalPrice = Number(price[0]) + administration
    }
    return <aside className="sticky flex flex-col gap-3 top-[15vh] w-full h-fit  px-5 py-3 bg-white rounded-2xl">
        <div className="flex flex-col gap items-start">
            <p>{titlePrice}</p>
            <span className="font-semibold text-heading-lg tabular-nums">{`$${price[0]} ${price.length>1 ? `/ $${price[1]}`:""}`}</span>
        </div>
        {(administration != 0) && (
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p>Administración</p>
                    <span className="font-semibold tabular-nums">${administration}</span>
                </div>
                <hr />
                {(biz == "ARRIENDO" || biz == "ARRIENDO/VENTA") && (
                    <div className="flex items-center justify-between ">
                        <p className="font-semibold">Total mensual</p>
                        <span className="font-semibold tabular-nums">${Number(totalPrice)}</span>
                    </div>
                )}
            </div>
        )}
        <div className="flex">
            <div className="rounded-full bg-primary">
            </div>
            <div className="flex flex-col gap">
                <p className="font-semibold">[Nombre del asesor]</p>
                <p>Asesor comercial, Sede [Ciudad]</p>
            </div>
        </div>
        <div className="flex flex-col gap-2 px-6">
            <button className="w-full  py-3 bg-accent text-primary text-semibold rounded-xl">Chatear con margarita</button>
            <button className="w-full  py-3 text-primary border-primary border rounded-xl">Agendar una visita</button>
        </div>
    </aside>
}
/* 
<div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <p className="font-bold">COD. {code}</p>
                <div className="flex flex-col gap">
                    <span className="text-xl">Valor  {biz == "VENTA" ? `de ${biz.toLowerCase()}` : ` del canon`}</span>
                    <span className="font-semibold text-3xl">{price[0] != "$" ? `$${price}` : price}</span>
                </div>
                {(administration !== 0) &&
                    (
                        <div className="flex flex-col gap">
                            <span className="text-xl">Administración</span>
                            <span className="text-3xl font-semibold">{formatPrice(administration)}</span>
                        </div>
                    )}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-heading-sm font-bold text-center">¿Deseas más información de este inmueble?</p>
                <div className="flex flex-col gap-2">
                    <button type="button" className="bg-accent text-white hover rounded-md px-2 py-1">Chatear con Margarita</button>
                    <button type="button" className="bg-secondary/10 text-black rounded-md px-2 py-1">Agendar una visita</button>
                </div>
                 <Script src="https://js.hsforms.net/forms/embed/developer/8765689.js" defer/>
                <div className="hs-form-html border-2 border-red-500" data-region="na1" data-form-id="bf69d6f3-18b4-4aba-9214-c53e29d46514" data-portal-id="8765689"></div> 
            </div>
        </div> */