import { MenuItem } from "../type/menu.type"
export const menu: MenuItem[] = [
    {
        name: "Inmuebles",
        pages: [
            { name: "Vivienda", link: "/vivienda" },
            { name: "Comercio", link: "/comercio" },
            { name: "Proyectos inmobiliarios", link: "" },
            { name: "Arenas Boutique", link: "" },
        ]
    },
    {
        name: "Quienes somos",
        pages: [
            { name: "Sobre Nosotros", link: "/about-us" },
            { name: "Nuestros asesores", link: "/brokers" },
            { name: "Contactanos", link: "/contact-us" }
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
            { name: "Arriendo y Venta", link: "/Arriendo-y-Venta" },
            { name: "Partner comercializador", link: "/projects-and-companies" },
            { name: "Marketing Inmobiliario", link: "#" },
            { name: "Perfilador de credito", link: "#" }
        ]
    }
]