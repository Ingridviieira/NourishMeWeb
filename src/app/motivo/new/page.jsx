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

            <main className="bg-slate-400 mt-20 m-auto p-12 rounded max-w-lg">
                <h2 className="text-2xl text-slate-100">Cadastrar Motivo</h2>

                <form action={handleSubmit} className="flex flex-col gap-5 ">
                    <InputText
                        label="Descrição do que você sentiu depois de comer"//nome da refeição
                        id="descricaoMotivo"
                        name="descricaoMotivo"
                        style={{ backgroundColor: "lightsteelblue" }}
                    />

                    {/* <InputText
                        label="O que Comeu:"
                        id="oQueComeu"
                        name="oQueComeu"
                        style={{ backgroundColor: "lightsteelblue" }}
                    />
                    <InputText
                        label="Descricao:"
                        id="descricao"
                        name="descricao"
                        style={{ backgroundColor: "lightsteelblue" }}
                    />
                    <InputText
                        label="Horario:"
                        id="horario"
                        name="horario"
                        style={{ backgroundColor: "lightsteelblue" }}
                    /> */}

                    <div className="flex justify-around">
                        <Button href="/motivo" variant="secondary">
                            Cancelar
                        </Button>
                        <Button type="button">
                            Salvar
                        </Button>
                    </div>

                    <span className="text-red-500">{error}</span>

                </form>

            </main>
        </>


    )
}