import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import './styles.css';

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
    
            <main className="bg-red-200 mt-10 p-9 rounded max-w-3xl m-auto forms">
            <div className="flex justify-between items-center">
                <h2 className="text-slate-600 text-2xl ">Forms</h2>

                <Button href="/motivo/new">
                Criar Motivo
                </Button>
            </div>
    
            <div id="data">
                {motivo.map(motivo => <DataRow key={motivo.id} motivo={motivo} />)}
            </div>
            </main>
        </>
        )
    }