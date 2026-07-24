import formatPrice from "@/shared/utils/formatPrice"
import Script from "next/script"

type props = {
    code: number,
    biz: string,
    price: string,
    administration: number,
}

export default function PriceInformationSection({ code, biz, price, administration }: props) {
    return <aside className="border-2 border-green-500 sticky top-[15vh] h-fit shadow-md/50 px-5 py-3 bg-white rounded-[20px]">
        <div className="flex flex-col gap-4">
            <div>
                <p className="font-bold">COD. {code}</p>
                <div className="flex flex-col gap">
                    <span className="text-xl">Valor  {biz == "VENTA" ? `de ${biz.toLowerCase()}` : ` del ${biz.toLowerCase()}`}</span>
                    <span className="font-semibold text-3xl">{price[0] != "$" ? `$ ${price}` : price}</span>
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
                <p className="text-2xl font-bold text-center">¿Deseas más información de este inmueble?</p>
                <div className="flex flex-col gap-2">
                    <button type="button" className="bg-accent text-white hover rounded-md px-2 py-1">Chatear con margarita</button>
                    <button type="button" className="bg-secondary/10 text-black rounded-md px-2 py-1">Agendar una visita</button>
                </div>
                <Script src="https://js.hsforms.net/forms/embed/developer/8765689.js" defer/>
                <div className="hs-form-html border-2 border-red-500" data-region="na1" data-form-id="bf69d6f3-18b4-4aba-9214-c53e29d46514" data-portal-id="8765689"></div>
            </div>
        </div>
    </aside>
}