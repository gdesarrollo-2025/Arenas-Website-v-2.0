import { Neighborhoods } from "@/shared/constants/neighborhoods.constants"
import { Field, FieldLegend } from "@/shared/ui/field"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/shared/ui/select"

type props = {
    value: string;
    city: string;
    onChange: (value: string) => void;
}

export default function FiltersNeighborhood({ value,city, onChange }: props) {
    return <Field>
        <FieldLegend>Barrio</FieldLegend>
        <Select value={Neighborhoods.find((n) => (n.code.toString() == value))?.name} onValueChange={(value) => {
            if (value !== null) {
                onChange(value)
            }
        }
        }>
            <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Selecciona un tipo de negocio" />
            </SelectTrigger>
            <SelectContent>
                {Neighborhoods.map((n) => {
                    if (n.city_code.toString() == city) {
                        return (
                            <SelectItem key={n.code} value={n.code.toString()}  >{n.name}</SelectItem>
                        )
                    }
                })}
            </SelectContent>
        </Select>

    </Field>
}