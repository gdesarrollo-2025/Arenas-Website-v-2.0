export const propertyVivienda= [
    { code: 1, name: "Apartamento" },
    { code: 2, name: "Casa" },
    { code: 8, name: "Finca" },
    { code: 10, name: "Casalote" },
    { code: 12, name: "Casa campestre" },
    { code: 14, name: "Casa condominio" },

]

export const propertyComercial= [

    { code: 4, name: "Local" },
    { code: 5, name: "Bodega" },
    { code: 6, name: "Oficina" },
    { code: 7, name: "Lote" },
    { code: 8, name: "Finca" },
    { code: 9, name: "Edificio" },
    { code: 13, name: "Casa-local" },
    { code: 15, name: "Consultorio" },
    { code: 20, name: "Hotel" }
]

export const propertyTpes= [
    ...propertyVivienda,
    ...propertyComercial
]