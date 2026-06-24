'use client'
import { propertyType, propertyTypes } from "@/shared/constants/properties.constants";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend } from "@/shared/ui/field";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/shared/ui/accordion";
import { Checkbox } from "@/shared/ui/checkbox";

type props = {
    options: propertyType[];
    value: string;
    onChange: (code: string) => void;
}
export default function FiltersPropertyType({options, value, onChange}:props) {

    const selected = value ? value.split(",").filter(Boolean) : [];

    return <Field>
        <FieldLegend> Tipo de propiedad</FieldLegend>
        <Accordion defaultValue={[]}>
            <AccordionItem value="propertiesType">
                <AccordionTrigger>Propiedades</AccordionTrigger>
                <AccordionContent>
                    {options.map((p) => (
                        <FieldLabel className="flex gap-2" key={p.code}> 
                        <Checkbox checked={selected.includes(String(p.code))}
                                    onCheckedChange={() => onChange(String(p.code))}/> {p.name} </FieldLabel>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </Field>
}
/* 
  */