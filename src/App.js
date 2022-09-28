import { useState } from "react"
import styled from "styled-components"
import logo from "./Images/logo.png"
import Jogo from "./Jogo"

const TelaInicial = styled.div`
  display: ${telaInicial ? 'flex' : 'none'};
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  img {
    width: 136px;
    height: 161px;
  }
  h1{
    font-weight: 400;
    font-size: 36px;
    text-align: center;
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
  }
`;

const Global = styled.div`
  font-family: 'Recursive';
  font-style: normal;
`;

function App() {
  const [telaInicial, setTelaInicial] = useState(true)
  return (
    <Global>
      <TelaInicial>
        <img src={logo} alt="Logo ZapReccal" />
        <h1>ZapRecall</h1>
        <button onClick={() => setTelaInicial(false)}>Iniciar Recall!</button>
      </TelaInicial>
      <Jogo />
    </Global>
  );
}

export default App;
