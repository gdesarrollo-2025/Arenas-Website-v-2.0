import { Metadata } from "next"

export const metadata: Metadata = {
    title:{
        template: "%s | Arenas Inmobiliaria",
        default: "Busqueda de propiedades",
    }
};
export default function Layout({children}: Readonly<{children:React.ReactNode}>){
    return <div>
        {children}
    </div>
}