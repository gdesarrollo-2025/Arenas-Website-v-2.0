import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group"

import { Field, FieldDescription, FieldLabel, FieldLegend } from "@/shared/ui/field";

type props = {
    value: string[];
    onChange: (values: string[]) => void;
}
export default function FiltersBathrooms({ value, onChange }: props) {
    return <Field>
        <FieldLegend>Nro. de Baños</FieldLegend>
        <ToggleGroup variant="outline" multiple
            value={value} onValueChange={onChange}>
            <ToggleGroupItem value="1">1</ToggleGroupItem>
            <ToggleGroupItem value="2">2</ToggleGroupItem>
            <ToggleGroupItem value="3">3</ToggleGroupItem>
            <ToggleGroupItem value="4">4</ToggleGroupItem>
            <ToggleGroupItem value="5+">5+</ToggleGroupItem>
        </ToggleGroup>
    </Field>
}