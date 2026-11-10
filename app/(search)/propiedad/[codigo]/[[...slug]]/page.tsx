import { getPropertyByID } from "@/features/properties/services/properties.service";
import buildSlug from "@/shared/utils/buildSlug";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import MainInfoSection from "./_sections/MainInfoSection";
import NavDetailsSection from "./_sections/NavDetailsSection";
import DetailsSection from "./_sections/DetailsSection";
import DescriptionSection from "./_sections/DescriptionSection";
import LocationSection from "./_sections/LocationSection";
import formatPrice from "@/shared/utils/formatPrice";
import { Capitalize } from "@/shared/utils/formatText";
import PriceInformationSection from "./_sections/PriceInformationSection";

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
        title: `${Capitalize(propiedad.type)} en ${Capitalize(propiedad.biz)} ubicado en ${propiedad.neighborhood}, ${propiedad.city}`,
        description: propiedad.description,
        alternates: {
            canonical: cannonicalUrl,
        },
        openGraph: {
            title: `${Capitalize(propiedad.type)} en ${Capitalize(propiedad.biz)} - ${propiedad.neighborhood}, ${propiedad.city}`,
            images: `${propiedad.images[0]}`,
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

    
    return <div className="flex flex-col container-large gap-50 my-[15dvh]">
        <MainInfoSection p={propiedad}/>
    </div>
}