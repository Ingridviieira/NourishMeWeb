"use client"

import { create } from "@/actions/motivo";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import { useState } from "react";
import './styles.css';


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

            <main className="bg-red-100 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-800 font-goudy text-center">
                Cadastrar Motivo
            </h2>

                <form action={handleSubmit} className="flex flex-col gap-5 fonte">
                    
                    <InputText
                        label="Descrição do que você sentiu depois de comer"
                        id="descricaoMotivo"
                        name="descricaoMotivo"
                        style={{ backgroundColor: "#c2c2c2"  }}
                    />

                    <div className="flex justify-around">
                        <Button href="/motivo" variant="secondary">
                            Cancelar
                        </Button>
                        <Button type="button">
                            Salvar
                        </Button>
                    </div>

                    <span className="text-slate-500">{error}</span>

                </form>

            </main>
        </>
    )
}