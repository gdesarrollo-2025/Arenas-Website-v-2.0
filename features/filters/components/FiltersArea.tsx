'use client';
import { useState } from "react";
import { Slider } from "@/shared/ui/slider";
import { Field, FieldDescription, FieldLabel, FieldLegend } from "@/shared/ui/field";

type props = {
    min: number;
    max: number;
    onChange: (values: number[]) => void;
}
export default function FiltersArea({min, max, onChange}:props) {

    const MIN = 0;
    const MAX = 200;

    return <Field>
        <FieldLabel>Area</FieldLabel>
        <FieldDescription>Rango de area [{min} m<sup>2</sup> - {max} m<sup>2</sup>]</FieldDescription>
        <Slider value={[min,max]}
            onValueChange={((values) => onChange(values as number[]))}
            min={MIN}
            max={MAX}
            step={5}
            className="w-full" />
    </Field>
}

/* 
 */