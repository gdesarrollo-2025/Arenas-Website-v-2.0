import { cities } from "@/shared/constants/cities.constants"
import { Field, FieldLegend } from "@/shared/ui/field"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/shared/ui/select"

type props = {
    value: string;
    onChange: (value: string) => void;
}

export default function FiltersCity({ value, onChange }: props) {
    return <Field>
        <FieldLegend>Ciudad</FieldLegend>
        <Select value={cities.find((c) => (c.code.toString() == value))?.name} onValueChange={(value) => {
            if (value !== null) {
                onChange(value)
            }
        }
        }>
            <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Selecciona un tipo de negocio" />
            </SelectTrigger>
            <SelectContent>
                {cities.map((c) => (
                    <SelectItem key={c.code} value={c.code.toString()}  >{c.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>

    </Field>
}