export default function formatPrice(price: number): string{
    const formatter = Intl.NumberFormat("co-CO",{style: "currency", currency: "COP",maximumFractionDigits:0})
    return formatter.format(price)
}