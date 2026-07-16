import slugify from "@/features/search/utils/slugify";


type propiedadSlug= {
    biz: string;
    type: string;
    city: string;
    neighborhood: string;

}
export default function buildSlug(propiedad: propiedadSlug): string[]{
    return [
        slugify(propiedad.biz),
        slugify(propiedad.type),
        slugify(propiedad.city),
        slugify(propiedad.neighborhood),
    ]
}