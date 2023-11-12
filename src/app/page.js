import NavBar from "@/components/NavBar";

export default function Home() {

  const centerSquareStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  };

  const textoStyle ={
    textAlign: 'center',
    fontFamily: 'bodoni MT',
    fontSize: '40px',
    lineHeight: '1.5',
    maxWidth: '800px',
    margin: '20px',
  };

  const paragraphStyle = {
    textAlign: 'center',
    fontFamily: 'Goudy Old Style',
    fontSize: '20px',
    lineHeight: '1.5',
    maxWidth: '500px',
    margin: '50px',
  };

  return (
    <>
      <NavBar />
      <div style={centerSquareStyle}>
        <main>
          <h2 style={textoStyle}>Empresa NourishMe</h2>
          <p style={paragraphStyle}>
            O Nourish Me será um aplicativo de monitoramento alimentar, que irá facilitar o processo de 
            tratamento de transtornos alimentares. Esses transtornos podem ter efeitos negativos sobre a
            saúde mental e física, incluindo depressão, ansiedade, baixa autoestima, distúrbios hormonais e problemas gastrointestinais.
          </p>
        </main>
      </div>
    </>
  );
}
