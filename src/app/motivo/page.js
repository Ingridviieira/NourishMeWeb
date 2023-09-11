import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { PlusIcon } from "@heroicons/react/24/outline";
import DataRow from "./DataRow";

async function getMotivo() {
    const url = "http://localhost:8080/api/v1/motivos"
    const resp = await fetch(url)
    return resp.json()
    }
    
    export default async function Motivo() {
        const motivo = await getMotivo()
        return (
        <>
            <NavBar active={"motivo"} />
    
            <main className="bg-gray-900 mt-10 p-9 rounded max-w-xl m-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-slate-100 text-2xl">Motivos</h2>
                <Button href="/motivo/new">
                <PlusIcon className="h-6 w-6" />
                criar motivo
                </Button>
            </div>
    
            <div id="data">
                {motivo.map(motivo => <DataRow key={motivo.id} motivo={motivo} />)}
            </div>
            </main>
        </>
    
    
        )
    }