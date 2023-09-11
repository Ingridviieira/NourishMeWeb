import DropMenu from "@/components/DropMenu";

export default function DataRow({motivo}) {
    return (
        <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-slate-700">
            <div className="flex gap-2 items-center">
                <span>{motivo.nome}</span>
            </div>
            <div className="flex items-center">
                <div className="invisible group-hover:visible">
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}