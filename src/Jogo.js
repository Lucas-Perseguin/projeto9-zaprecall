import styled from "styled-components"
import logoPequena from "./images/logo-pequeno.png"
import deck from "./deck"
import Card from "./Card"
import { useState } from "react"

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
function Jogo({ telaInicial }) {
    const [contador, setContador] = useState(0)
    return (
        <Global style={telaInicial ? { display: 'none' } : { display: 'flex' }}>
            <Logo>
                <img src={logoPequena} alt="Logo ZapRecall" />
                <h1>ZapRecall</h1>
            </Logo>
            {deck.map((card, index) => <Card card={card} index={index} contador={contador} setContador={setContador} />)}
        </Global>
    )
}

export default Jogo