"use server";

import { revalidatePath } from "next/cache";
const url = "http://localhost:8080/api/v1/motivos";

export async function create(formData) {


    console.log (formData);
    
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
        "Content-type": "application/json",
        },
    };

    const resp = await fetch(url, options);
    if (resp.status !== 201) {
        const json = await resp.json();
        let errorsMessage = '';
        console.log(json)
        if (Array.isArray(json)) {
            errorsMessage = json.map((error) => error.message).join('. ');
        } else if (json.message) {
            errorsMessage = json.message;
        }
        return { message: `Erro ao cadastrar o motivo. ${errorsMessage}` };
    }

    revalidatePath("/motivo");
    return { success: "ok" };
}

export async function getMotivo() {
    await new Promise(r => setTimeout(r, 5000))
    const resp = await fetch(url)
    return resp.json()
}

export async function destroy(id) {
    const urlDelete = `${url}/${id}`;

    const options = {
        method: "DELETE"
    };

    const resp = await fetch(urlDelete, options);

    if (resp.status !== 204) {
        return { error: `Erro ao apagar o motivo. Status: ${resp.status}` };
    }

    revalidatePath("/motivo");
    return { success: "ok" };
}

export async function getMotivos(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados do motivo"}

    return await resp.json()
}

export async function update(motivo){
    const updateUrl = url + "/" + motivo.id

    const options = {
        method: "PUT",
        body: JSON.stringify( motivo ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar motivo"}

    revalidatePath("/motivo")
}
