import { MenuItem } from "../type/menu.type"
export const menu: MenuItem[] = [
    {
        name: "Inmuebles",
        pages: [
            { name: "Vivienda", link: "/vivienda" },
            { name: "Comercio", link: "/comercio" },
            { name: "Proyectos inmobiliarios", link: "/proyectos" },
            { name: "Arenas Boutique", link: "https://arenasinmobiliaria.co/exclusivos/" },
        ]
    },
    {
        name: "Quienes somos",
        pages: [
            { name: "Sobre Nosotros", link: "/" },
            { name: "Nuestros asesores", link: "/" },
            { name: "Contactanos", link: "/" }
        ]
    },
    {
        name: "Portal de clientes",
        pages: [
            { name: "Propietarios", link: "/Propietarios" },
            { name: "Arrendatarios", link: "/Arrendatarios" },
            { name: "Consigna tu inmueble", link: "/#" }
        ]
    },
    {
        name: "Servicios",
        pages: [
            { name: "Arriendo y Venta", link: "/" },
            { name: "Partner comercializador", link: "/" },
            { name: "Marketing Inmobiliario", link: "#" },
            { name: "Perfilador de credito", link: "#" }
        ]
    }
]