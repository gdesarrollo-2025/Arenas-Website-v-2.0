import { location } from "../type/location.type";

export const locations: location[] = [
    {
        city: "Barranquilla",
        branches: [
            {
                name: "Sede comercial",
                address: "Cra 58 # 75 – 78, El Prado.",
                phones: [
                    {
                        team: "Arriendo",
                        number: "(605) 385 7777"
                    },
                    {
                        team: "Ventas",
                        number: "(605) 385 4000"
                    }
                ]
            },
            {
                name: "Sede administrativa",
                address: "Calle 106 # 50 – 67, Of. 210,  piso 2, C.C. Gran Boulevard.",
                phones: [
                    {
                        number: "(605) 385 9191"
                    }
                ]
            }
        ]
    },
    {
        city: "Cartagena",
        branches: [
            {
                address: "Cra 2 # 12 – 161, Bocagrande.",
                phones: [
                    {
                        number: "(605) 693 4000"
                    }
                ]
            }
        ]
    }
]