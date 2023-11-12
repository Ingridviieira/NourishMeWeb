import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-red-200 px-4 py-2">
        <ul id="links" className="flex items-end gap-14 text-red-400">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-red-400">NourishMe</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="refeicao" && "text-red-800"} href="/refeicao">
                    Refeições
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="motivo" && "text-red-800"} href="/motivo">
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