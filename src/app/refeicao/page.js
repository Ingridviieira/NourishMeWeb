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
            <h1 className="info-title">Informações:</h1>
            <main className="m-20 p-12">
                {refeicoes.map(refeicao => <DataRow key={refeicao.id} refeicao={refeicao} />)}
                
                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 1) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>

                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 2) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>

                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 3) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>

                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 4) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>

                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 5) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>

                <div id="data" className="bg-red-100 rounded">
                    {refeicoes.map(refeicao => {
                    if (refeicao.id === 6) {
                        return <DataRow key={refeicao.id} refeicao={refeicao} />;
                    }
                    return null;
                    })}
                </div>
            </main>
        </>
    );
}
