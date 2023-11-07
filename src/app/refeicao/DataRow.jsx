export default function DataRow({ refeicao }) {
    console.log('ID da Refeicao:', refeicao.id);

    return (
        <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer bg-gray-200"> {/* Adicionando fundo cinza claro */}
            <div className="flex gap-4 items-center h-96 w-full overflow-y-auto">
                <div className="bg-white rounded p-4 flex flex-col flex-1"> {/* Adicionando fundo branco e usando flex-1 para preencher o espaço */}
                    <h1 className="text-2xl underline">Nome da Refeição</h1>
                    <span className="text-2xl text-black">{refeicao.nome}</span>
                    <h1 className="text-2xl underline">Nome da Refeição</h1>
                    <span className="text-2xl text-black">{refeicao.nomeRefeicao}</span>
                </div>
            </div>
        </div>
    );
}
