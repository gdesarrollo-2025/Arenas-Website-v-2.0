import normalizeString from "@/features/search/utils/normalizeString"

type propiedadSlug= {
    biz: string;
    type: string;
    city: string;
    neighborhood: string;

}
export default function buildSlug(propiedad: propiedadSlug): string[]{
    return [
        normalizeString(propiedad.biz),
        normalizeString(propiedad.type),
        normalizeString(propiedad.city),
        normalizeString(propiedad.neighborhood),
    ]
}