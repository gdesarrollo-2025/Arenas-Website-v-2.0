import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group"
import { Field, FieldDescription, FieldLabel, FieldLegend } from "@/shared/ui/field";

type props = {
    value: string[];
    onChange: (values: string[]) => void;
}
export default function FiltersBedrooms({ value, onChange }: props) {
    return <Field>
        <FieldLegend>Nro. de Habitaciones</FieldLegend>
        <ToggleGroup variant="outline" multiple
            value={value} onValueChange={onChange}>
            <ToggleGroupItem value="1">1</ToggleGroupItem>
            <ToggleGroupItem value="2">2</ToggleGroupItem>
            <ToggleGroupItem value="3">3</ToggleGroupItem>
            <ToggleGroupItem value="4">4</ToggleGroupItem>
            <ToggleGroupItem value="5">5+</ToggleGroupItem>
        </ToggleGroup>
    </Field>
}
/* 
<div>
        <label>Habitaciones</label>
        <div className="grid grid-cols-5 gap-1 ">
            <label className="flex justify-center bg-accent has-checked:bg-primary has-checked:font-semibold text-white  p-1 rounded-full">1 <input type="checkbox" name="" className="hidden"/></label>
            <label className="flex justify-center bg-accent has-checked:bg-primary has-checked:font-semibold text-white  p-1 rounded-full">2 <input type="checkbox" name="" className="hidden"/></label>
            <label className="flex justify-center bg-accent has-checked:bg-primary has-checked:font-semibold text-white  p-1 rounded-full">3 <input type="checkbox" name="" className="hidden"/></label>
            <label className="flex justify-center bg-accent has-checked:bg-primary has-checked:font-semibold text-white  p-1 rounded-full">4 <input type="checkbox" name="" className="hidden"/></label>
            <label className="flex justify-center bg-accent has-checked:bg-primary has-checked:font-semibold text-white  p-1 rounded-full">5 <input type="checkbox" name="" className="hidden"/></label>
        </div>
    </div> */