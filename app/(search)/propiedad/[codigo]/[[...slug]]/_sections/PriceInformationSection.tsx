import formatPrice from "@/shared/utils/formatPrice"

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
            <div >
                <p className="text-2xl font-bold text-center">¿Deseas más información de este inmueble?</p>
                <div className="flex flex-col gap-2">
                    <button type="button" className="bg-accent text-white hover rounded-md px-2 py-1">Chatear con margarita</button>
                    <button type="button" className="bg-secondary/10 text-black rounded-md px-2 py-1">Agendar una visita</button>
                </div>
            </div>
        </div>
    </aside>
}