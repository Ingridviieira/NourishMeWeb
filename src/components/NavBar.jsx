import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-gray-400 px-4 py-2">
        <ul id="links" className="flex items-end gap-14 text-slate-950">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-slate-100">NourishMe</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="refeicao" && "text-slate-300"} href="/refeicao">
                    Refeições
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="motivo" && "text-slate-300"} href="/motivo">
                        Motivo
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pinimg.com/564x/f1/d9/eb/f1d9ebefb5a4c87f74bc159891c7f5f9.jpg" alt="avatar do usuário" />
            </div>
        </nav>
    )
}