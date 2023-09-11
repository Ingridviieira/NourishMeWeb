import NavBar from "@/components/NavBar";

export default function Home() {

  const centerSquareStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  };

  const textoStyle ={
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontSize: '25px'
  }

  const paragraphStyle = {
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontSize: '18px',
    lineHeight: '1.5',
    maxWidth: '800px',
    margin: '20px',
  };

  return (
    <>
      <NavBar />
      <div style={centerSquareStyle}>
        <main>
          <h2 style={textoStyle}>Empresa NourishMe</h2>
          <p style={paragraphStyle}>
            A Empresa NourishMe está desenvolvendo um aplicativo de monitoramento alimentar chamado Nourish Me. Este aplicativo visa simplificar o tratamento de transtornos alimentares, que podem impactar adversamente a saúde mental e física, incluindo condições como depressão, ansiedade, baixa autoestima, distúrbios hormonais e problemas gastrointestinais. O aplicativo permitirá que os usuários acompanhem seus hábitos alimentares, atividade física e estados emocionais, oferecendo feedback personalizado e dicas para ajudar na gestão dos sintomas e na promoção de um relacionamento saudável com a comida. Além disso, a plataforma permitirá o compartilhamento de informações com terapeutas, permitindo que eles monitorem o progresso dos pacientes e ajustem o tratamento conforme necessário. O aplicativo também oferecerá recursos adicionais, como suporte emocional por meio de inteligência artificial, meditações guiadas e exercícios de mindfulness, com o objetivo de ajudar os usuários a gerenciar o estresse, lidar com gatilhos emocionais e cultivar hábitos alimentares saudáveis.
          </p>
        </main>
      </div>
    </>
  );
}
