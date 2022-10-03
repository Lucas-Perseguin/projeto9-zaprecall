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
  button:hover{
    cursor: pointer;
    text-decoration: underline;
    border: 2px solid #D70900;
  }
  input{
    width: 246px;
    height: 43px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
`;

const Global = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  height: 100%;
  *{
    flex-shrink: 0;
  }
`;

function App() {
  const [telaInicial, setTelaInicial] = useState(true)
  const [meta, setMeta] = useState(0)
  return (
    <Global>
      <TelaInicial style={telaInicial ? { display: 'flex' } : { display: 'none' }}>
        <img src={logo} alt="Logo ZapReccal" />
        <h1>ZapRecall</h1>
        <input type="number" placeholder="Insira sua meta de Zaps!" onChange={(event) => setMeta(event.target.value)} data-identifier="goals-input"/>
        <button onClick={() => setTelaInicial(false)} data-identifier="start-btn">Iniciar Recall!</button>
      </TelaInicial>
      <Jogo telaInicial={telaInicial} meta={meta} />
    </Global>
  );
}

export default App;
