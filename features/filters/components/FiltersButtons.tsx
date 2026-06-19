import { Button } from "@/shared/ui/button";

import { Field } from "@/shared/ui/field";

type props = {
    onApply: () => void;
    onReset: () => void;
}
export default function FiltersButtons({onApply, onReset}:props) {
    return <div className="flex flex-col xl:flex-row justify-between w-full ">
        <Button onClick={onApply} >Aplicar filtros</Button>
        <Button variant="outline" onClick={onReset}>Reiniciar filtros</Button>
    </div>
}