import NavBar from "@/components/NavBar";
import './styles.css';

export default function Refeicao(){

    return(
        <>

            <NavBar active = {"refeicao"}/>
            <main className="bg-gray-500 m-20 p-12">
            <h1 className="info-title">Informações:</h1>
            <br/>
            
            <p className="info-text">
                Dia 11/09/2023 <br />
                Refeição: Café da Manhã<br />
                O que comeu: Ovos, sucrilhos leite e bisnagas<br />
                Sentimento: Me senti horrível porque eu comi demais<br />
                Horário: 8:45
            </p>
            <br />

            <p className="info-text">
                Dia 11/09/2023 <br />
                Refeição: Café da Manhã<br />
                O que comeu:Arroz, filé de frango, salada e ovos<br />
                Sentimento: Me senti bem, só porque comi salada<br />
                Horário: 12:00
            </p>
            <br />

            <p className="info-text">
                Dia 11/09/2023 <br />
                Refeição: Café da Tarde<br />
                O que comeu: 2 pão com ovo e refrigerante<br />
                Sentimento: Estou bem até agora<br />
                Horário:
            </p>
            <br />

            <p className="info-text">
                Dia 11/09/2023 <br />
                Refeição:Janta<br />
                O que comeu:Não comi nada<br />
                Sentimento: Fiquei mal porque eu comi demais ao longo do dia<br />
                Horário: nenhum
            </p>

            </main>
        </>
    )
}
