import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Loading() {
    const motivos = Array(3).fill({})
    return (
        <>
            <NavBar active={"motivo"} />

            <main className="bg-red-100 mt-10 p-9 rounded max-w-3xl m-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-slate-600 text-2xl">Motivo</h2>
                    <Button href="/motivos/new">
                        <PlusIcon className="h-6 w-6" />
                        Criar Motivo
                    </Button>
                </div>

                <div id="data">
                    {motivos.map(() => {
                        return (
                            <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-red-200">
                                <div className="flex gap-2 items-center">
                                    <Skeleton className="h-6 w-6 bg-red-100 rounded-full" />
                                    <Skeleton className="h-6 w-32 bg-red-100" />
                                </div>
                                <div className="flex items-center">
                                    <Skeleton className="h-6 w-10 bg-red-200" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}