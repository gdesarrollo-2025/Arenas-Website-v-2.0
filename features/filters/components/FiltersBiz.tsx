import { BizTypes } from "@/shared/constants/biz.constants";

import { Field, FieldLegend } from "@/shared/ui/field";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/shared/ui/select";

type props = {
    value: string;
    onChange: (value: string) => void;
}
export default function FiltersBiz({ value, onChange }: props) {
    return <Field>
        <FieldLegend>Gestion</FieldLegend>
        <Select value={BizTypes.find((b) => (b.code.toString() == value))?.name} onValueChange={(value) => {
            if (value !== null) {
                onChange(value);
            }
        }}>
            <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Selecciona un tipo de negocio" />
            </SelectTrigger>
            <SelectContent>
                {BizTypes.map((b) => (
                    <SelectItem key={b.code} value={b.code.toString()}  >{b.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </Field>
}

/* 
 */
