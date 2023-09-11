"use server";

import { revalidatePath } from "next/cache";

export async function create(formData) {
    const url = "http://localhost:8080/api/v1/motivo";

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
        if (Array.isArray(json)) {
            errorsMessage = json.map((error) => error.message).join('. ');
        } else if (json.message) {
            errorsMessage = json.message;
        }
        return { message: `Erro ao cadastrar o motivo. ${errorsMessage}` };
    }

    revalidatePath("/motivos");
    return { success: "ok" };
}
