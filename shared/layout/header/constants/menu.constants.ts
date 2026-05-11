export type MenuItem = {
    name: string,
    pages: pageItem[];
}

type pageItem = {
    name: string,
    link: string,
}

export const Menu: MenuItem[] = [
    {
        name: "Inmuebles",
        pages: [
            { name: "Vivienda", link: "" },
            { name: "Comercio", link: "" },
            { name: "Proyecto", link: "" },
            { name: "Exclusivos", link: "" },
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
            { name: "Propietarios", link: "/owners" },
            { name: "Arrendatarios", link: "/tenants" },
            { name: "Consigna tu inmueble", link: "/#" }
        ]
    },
    {
        name: "Servicios",
        pages: [
            { name: "Arriendo y Venta", link: "/rent-and-sell" },
            { name: "Partner comercializador", link: "/projects-and-companies" },
            { name: "Marketing Inmobiliario", link: "#" },
            { name: "Perfilador de credito", link: "#" }
        ]
    }
]