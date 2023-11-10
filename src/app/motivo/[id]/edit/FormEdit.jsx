"use client"
import { update } from "@/actions/motivo";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { redirect } from 'next/navigation';
import { useState } from "react";

export default function FormEdit({motivo}) {
    const [error, setError] = useState("")
    const [ motivoEdit, setMotivoEdit] = useState(motivo)

    async function handleSubmit() {
        const resp = await update(motivoEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/motivo")

    }

    function handleFieldEdit(field, value){
        setMotivoEdit({
            ...motivoEdit,
            [field]: value
        })

    }


    return (
        <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-100">Editar Motivo</h2>

            <form action={handleSubmit} className="flex flex-col gap-4">
                <InputText
                    label="Descrição do que você sentiu depois de comer"
                    id="descricaoMotivo"
                    name="descricaoMotivo"
                    style={{ backgroundColor: "lightsteelblue" }}
                />

                <div className="flex justify-around">
                    <Button href="/motivo" variant="secondary">
                        <ChevronLeftIcon className="h-6 w-6 " />
                        cancelar
                    </Button>
                    <Button type="button">
                        <CheckIcon className="h-6 w-6" />
                        salvar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

            </form>

        </main>
    )
}