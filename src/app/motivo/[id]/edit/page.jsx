import { getMotivo } from "@/actions/motivo";

import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function MotivoEdit({params}) {
   
    const motivo = await getMotivo(params.id)
    
    return (
        <>
            <NavBar active="motivo" />
            <FormEdit motivo={motivo} />
        </>
    )
}