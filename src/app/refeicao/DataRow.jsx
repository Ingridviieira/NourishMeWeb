import './styles.css';

export default function DataRow({ refeicao }) {
    console.log('Dados da refeição:', refeicao);

    return (
        <div id="data-row">
            <div className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer bg-gray-200">
                    <div className="flex flex-row">
                        <h1 className="mr-2 large-text">Nome: </h1>
                        <span className="large-text">{refeicao.nome}</span>
                    </div>

                    <div className="flex flex-row">
                        <h1 className="mr-2 large-text">Nome da Refeição: </h1>
                        <span className="large-text">{refeicao.nomeRefeicao}</span>
                    </div>

                    {refeicao.motivo && (
                        <div className="flex flex-row">
                            <h1 className="mr-2 large-text">Motivo: </h1>
                            <span className="large-text">{refeicao.motivo.descricaoMotivo}</span>
                        </div>
                    )}
            </div>
        </div>
    );
}