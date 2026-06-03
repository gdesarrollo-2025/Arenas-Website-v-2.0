import List from "@/shared/components/List"
import { menu } from "@/shared/constants/menu.constants"
import { locations } from "@/shared/constants/location.constants"
import { schedules } from "@/shared/constants/schedule.constants"
import FooterDropdown from "@/shared/components/FooterDropdown";
export default function LayoutFooter() {
    const date = new Date();

    return <div className="flex flex-col gap-5 bg-primary px-10 text-background py-10 ">
        <div className="flex flex-col lg:flex-row items-start  justify-between gap-5 ">
            <List content={menu} />
            <div className="flex w-full lg:w-auto grow  justify-between lg:justify-around gap-5">
                <div >
                    <p className="font-semibold text-accent">Nuestras sedes</p>
                    {locations.map((l, idx) => (
                        <div key={idx}>
                            <FooterDropdown title={l.city} items={l.branches} />
                        </div>
                    ))}
                </div>
                <div>
                    <FooterDropdown title={"Nuestros horarios de atención"} items={schedules} />
                </div>
            </div>
        </div>
        <div className="flex justify-around">
            <div><p>Copyright ©{date.getFullYear()} Arenas Inmobiliaria</p></div>
            <div><p>Politica de {date.getFullYear()}</p></div>
        </div>
        <div>
            <small className="text-xs text-justify">Las imágenes publicadas, planos, renders y demás piezas publicitarias son simples
                representaciones gráficas de diseño y pueden variar en su percepción y construcción final, están sujetos a modificación
                y/o cambios sin previo aviso o consulta, los mismos no constituyen oferta por parte del Promotor y/o Constructor.
                Los valores aquí presentados son susceptibles a cambios sin previo aviso y no comprometen en ningún momento a Grupo
                Arenas S.A.S. a mantenerlos en el momento de la negociación. La información suministrada en el blog u otros ítems
                informativos son de dominio público y sujeto a la propiedad intelectual de quien lo redacta y no comprometen a GRUPO
                ARENAS S.A.S. bajo ningún motivo.</small>
        </div>
    </div>
}