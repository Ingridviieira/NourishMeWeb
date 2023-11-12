"use client"
import { update } from "@/actions/motivo";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { redirect } from 'next/navigation';
import { useState } from "react";
import './styles.css';

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
        <main className="bg-red-200 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-700 edit">Editar Motivo</h2>

            <form action={handleSubmit} className="flex flex-col gap-4 editText">
                <InputText
                    label="Descrição do que você sentiu depois de comer"
                    id="descricaoMotivo"
                    name="descricaoMotivo"
                    value={motivoEdit.descricaoMotivo}
                    onChange={(e) => handleFieldEdit("descricaoMotivo", e.target.value)}
                    style={{ backgroundColor: "#c2c2c2"  }}
                />

                <div className="flex justify-around">
                    <Button href="/motivo" variant="secondary">
                        <ChevronLeftIcon className="h-6 w-6 " />
                        Cancelar
                    </Button>
                    <Button type="button">
                        <CheckIcon className="h-6 w-6" />
                        Salvar
                    </Button>
                </div>

                <span className="text-red-400">{error}</span>

            </form>

        </main>
    )
}