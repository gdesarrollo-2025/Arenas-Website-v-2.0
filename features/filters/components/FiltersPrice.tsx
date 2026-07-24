'use client';
import { useState } from "react";
import { Slider } from "@/shared/ui/slider";
import { Field, FieldDescription, FieldLabel, FieldLegend } from "@/shared/ui/field";
import formatPrice from "@/shared/utils/formatPrice";

type props = {
    min: number;
    max: number;
    onChange: (values: number[]) => void;
}

export default function FiltersPrice({min,max, onChange}: props) {

    const MIN = 700000;
    const MAX = 5000000;


    return <Field>
        <FieldLabel>Precio</FieldLabel>
        <FieldDescription>Rango de precios [{formatPrice(min)} - {formatPrice(max)}]</FieldDescription>
        <Slider value={[min, max]}
            onValueChange={((values) => onChange(values as number[]))}
            min={MIN}
            max={MAX}
            step={50000}
            className="w-full" />
    </Field>
}
