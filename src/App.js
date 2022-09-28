import { useState } from "react"
import styled from "styled-components"
import logo from "./images/logo.png"
import Jogo from "./Jogo"

const TelaInicial = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  height: 100vh;
  img {
    width: 136px;
    height: 161px;
    margin-bottom: 14px;
  }
  h1{
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
    line-height: 60px;
    color: #FFFFFF;
  }
  button{
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    line-height: 54px;
    color: #D70900;
  }
`;

const Global = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  height: 100vh;
`;

function App() {
  const [telaInicial, setTelaInicial] = useState(true)
  return (
    <Global>
      <TelaInicial style={telaInicial ? { display: 'flex' } : { display: 'none' }}>
        <img src={logo} alt="Logo ZapReccal" />
        <h1>ZapRecall</h1>
        <button onClick={() => setTelaInicial(false)}>Iniciar Recall!</button>
      </TelaInicial>
      <Jogo telaInicial={telaInicial} />
    </Global>
  );
}

export default App;
