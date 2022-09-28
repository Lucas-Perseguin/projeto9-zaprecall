import styled from "styled-components"
import logoPequena from "./images/logo-pequeno.png"
import deck from "./deck"
import Card from "./Card"
import { useState } from "react"
import Marcador from "./Marcador"

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 255.61px;
    height: 60px;
    margin-top: 44px;
    margin-bottom: 20px;
    img{
        height: 60px;
    }
    h1{
        font-weight: 400;
        font-size: 36px;
        line-height: 60px;
        color: #FFFFFF;
    }
`;

const Global = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    background-color: #FB6B6B;
    gap: 25px;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 126px;
    color: #000000;
    width: 100%;
    background-color: #FFFFFF;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 30px;
        *{
            height: 20px;
            width: 20px;
        }
    }
`

function Jogo({ telaInicial }) {
    const [contador, setContador] = useState(0)
    const [deckJogo, setDeckJogo] = useState(deck)
    return (
        <Global style={telaInicial ? { display: 'none' } : { display: 'flex' }}>
            <Logo>
                <img src={logoPequena} alt="Logo ZapRecall" />
                <h1>ZapRecall</h1>
            </Logo>
            {deck.map((card, index) => <Card key={index} card={card} index={index} contador={contador} setContador={setContador} deckJogo={deckJogo} setDeckJogo={setDeckJogo} />)}
            <Footer>
                <h2>{contador}/{deck.length} CONCLUÍDOS</h2>
                <ul>
                    {deckJogo.map((card, index) => <Marcador key={index} card={card} />)}
                </ul>
            </Footer>
        </Global>
    )
}

export default Jogo