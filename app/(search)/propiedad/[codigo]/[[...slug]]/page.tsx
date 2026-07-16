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

    return <div className="bg-secondary/10">
        <div className="relative grid grid-cols-[70%_1fr] pt-[15vh] gap-3 max-w-[90vw] w-full mx-auto ">
            <div className="flex flex-col gap-5  border-2 border-accent">
                <MainInfoSection p={propiedad} />
                <NavDetailsSection />
                <DetailsSection areacons={propiedad.area_cons} bedrooms={propiedad.bedrooms} bathrooms={propiedad.bathrooms} stratum={propiedad.stratum} buildyear={propiedad.build_year} />
                <DescriptionSection d={propiedad.description} c={propiedad.amenities} />
                <LocationSection lat={propiedad.latitude} lon={propiedad.longitude} />
            </div>
            <aside className="border-2 border-green-500 sticky top-[15vh] h-fit shadow-md/50 px-5 py-3 bg-white rounded-[20px]">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-bold">COD. {propiedad.code}</p>
                        <div className="flex flex-col gap">
                            <span className="text-xl">Valor  {propiedad.biz == "VENTA" ? `de ${propiedad.biz.toLowerCase()}` : ` del ${propiedad.biz.toLowerCase()}`}</span>
                            <span className="font-semibold text-3xl">{propiedad.price_format[0] !="$" ? `$ ${propiedad.price_format}` : propiedad.price_format}</span>
                        </div>
                        {(propiedad.administration !== 0) &&
                            (
                                <div className="flex flex-col gap">
                                    <span className="text-xl">Administración</span>
                                    <span className="text-3xl font-semibold">{formatPrice(propiedad.administration)}</span>
                                </div>
                            )}
                    </div>
                    <div >
                        <p className="text-2xl font-bold text-center">¿Deseas más información de este inmueble?</p>
                        <div className="flex flex-col gap-2">
                            <button type="button" className="bg-accent text-white hover rounded-md px-2 py-1">Chatear con margarita</button>
                            <button type="button" className="bg-secondary/10 text-black rounded-md px-2 py-1">Agendar una visita</button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
}