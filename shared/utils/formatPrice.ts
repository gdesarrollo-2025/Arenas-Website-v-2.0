const copFormatter = new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 0,maximumFractionDigits:0})

export default function formatPrice(price: number): string{
    return copFormatter.format(price)
}