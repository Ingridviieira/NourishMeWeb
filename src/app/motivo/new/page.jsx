"use client"

import { create } from "@/actions/motivo";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function FormMotivo(){
    const [error, setError] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)

        if (!resp.success) {
            setError(resp.message)
            return
        }

        redirect("/motivo")
        
    }

    return (
        <>
            <NavBar active="motivos" />

            <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
                <h2 className="text-2xl text-slate-100">Cadastrar Motivo</h2>

                <form action={handleSubmit} className="flex flex-col gap-4">
                    <InputText
                        label="nome" //nome da refeição
                        id="nome"
                        name="nome"
                    />
                    <InputText
                        label="horario"
                        id="horarioo"
                        name="horario"
                    />
                    <InputText
                        label="descricao"
                        id="descricao"
                        name="descricao"
                    />

                    <div className="flex justify-around">
                        <Button href="/motivo" variant="secondary">
                            cancelar
                        </Button>
                        <Button type="button">
                            salvar
                        </Button>
                    </div>

                    <span className="text-red-500">{error}</span>

                </form>

            </main>
        </>


    )
}