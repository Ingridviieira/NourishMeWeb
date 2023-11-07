import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import './styles.css';

async function getRefeicao() {
    try {
        const url = 'http://localhost:8080/api/v1/refeicoes';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar refeicao');
        }
        const data = await response.json();
        if (data && data._embedded && data._embedded.entityModelList) {
            return data._embedded.entityModelList;
        } else {
            throw new Error('Formato de dados inválido na resposta da API');
        }
        } catch (error) {
        console.error('Erro ao buscar refeicoes:', error);
        return [];
        }
    }

    export default async function Refeicoes(){
        const refeicoes= await getRefeicao();
        console.log(refeicoes);
    
    return (
        <>
            <NavBar active={"refeicao"} />
            <main className="bg-gray-500 m-20 p-12">
                <h1 className="info-title">Informações:</h1>
                {refeicoes.map(refeicao => <DataRow key={refeicao.id} refeicao={refeicao} />)}
                
            </main>
        </>
    );
}
