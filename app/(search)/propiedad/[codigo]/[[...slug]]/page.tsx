import { getPropertyByID } from "@/features/properties/services/properties.service";
import buildSlug from "@/shared/utils/buildSlug";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type props = {
    params: Promise<{
        codigo: string;
        slug?: string[];
    }>
}
export async function generateMetadata({ params }: props): Promise<Metadata> {
    const { codigo } = await params;
    const propiedad = await getPropertyByID(codigo)

    const cannonicalSlug = buildSlug({ biz: propiedad.biz, type: propiedad.type, city: propiedad.city, neighborhood: propiedad.neighborhood })
    const cannonicalUrl = `http://website.arenassa.com/propiedad/${codigo}/${cannonicalSlug.join("/")}`;
    return {
        title: `${propiedad.type} en ${propiedad.biz} ubicado en ${propiedad.neighborhood}, ${propiedad.city}`,
        description: propiedad.description,
        alternates: {
            canonical: cannonicalUrl,
        },
        openGraph: {
            title: `${propiedad.type} en ${propiedad.biz} - ${propiedad.neighborhood}, ${propiedad.city}`,
            images: `${propiedad.images[0]}}`,
            url: cannonicalUrl
        }
    }
}
export default async function Page({ params }: props) {

    const { codigo, slug = [] } = await params;

    const propiedad = await getPropertyByID(codigo);

    const canonicalSlug = buildSlug({ biz: propiedad.biz, type: propiedad.type, city: propiedad.city, neighborhood: propiedad.neighborhood })
    const currentSlugPath = slug.join('/');
    const canonicalSlugPath = canonicalSlug.join('/');

    if (currentSlugPath !== canonicalSlugPath) {
        redirect(`/propiedad/${codigo}/${canonicalSlugPath}`)
    }
    return <div className="mt-[15vh]">
        {JSON.stringify(propiedad)}
    </div>
}