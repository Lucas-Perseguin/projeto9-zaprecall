import { useState } from "react"
import styled from "styled-components"
import play from "./images/play-outline-icon.svg"
import setinha from "./images/setinha.png"

const CartaFechada = styled.div`
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    img{
        width: 20px;
        height: 23px;
    }
    button{
        border: none;
        background: none;
        height: 23px;
        width: 20px;
    }
    h2{
        font-weight: 700;
        font-size: 16px;
    }
`

const CartaAberta = styled.div`
    width: 299px;
    height: 131px;
    background-color: #FFFFD4;
    color: #333333;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 10px;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const Buttons = styled.div`
    position: absolute;
    bottom: 6px;
    left: calc(50% - 271px / 2);
    display: flex;
    justify-content: space-between;
    color: #000000;
    width: 271px;
    height: 38px;
    button{
        color: #FFFFFF;
        border: none;
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
    }
`

function Card({ card, index, contador, setContador, deckJogo, setDeckJogo }) {
    const [cartaAberta, setCartaAberta] = useState(false)
    const [mostrarResposta, setMostrarResposta] = useState(false)
    const [respondido, setRespondido] = useState(false)
    const [corReposta, setCorResposta] = useState("")

    function responder(cor) {
        setCorResposta(cor)
        setRespondido(true)
        setMostrarResposta(false)
        setCartaAberta(false)
        setContador(contador + 1)
        let auxCard = {...card, Color: { cor } }
        let auxDeck = [...deckJogo]
        auxDeck[index] = { ...auxCard }
        setDeckJogo(auxDeck)
    }

    return (
        <>
            <CartaFechada style={cartaAberta ? { display: 'none' } : { display: 'flex' }}>
                <h2 style={respondido ? { color: `${corReposta}`, textDecoration: 'line-through' } : { color: 'black' }}>Pergunta {index + 1}</h2>
                <button onClick={() => setCartaAberta(true)} disabled={respondido}>
                    <img src={play} alt="Botão para abrir pergunta" />
                </button>
            </CartaFechada>
            <CartaAberta style={cartaAberta ? { display: 'block' } : { display: 'none' }}>
                <div style={mostrarResposta ? { display: 'none' } : { display: 'block' }}>
                    <h2>{card.Q}</h2>
                    <img src={setinha} alt="Mostrar Resposta" onClick={() => setMostrarResposta(true)} />
                </div>
                <div style={mostrarResposta ? { display: 'block' } : { display: 'none' }}>
                    <h2>{card.A}</h2>
                    <Buttons>
                        <button onClick={() => responder('#FF3030')} style={{ backgroundColor: '#FF3030' }}>Não lembrei</button>
                        <button onClick={() => responder('#FF922E')} style={{ backgroundColor: '#FF922E' }}>Quase não lembrei</button>
                        <button onClick={() => responder('#2FBE34')} style={{ backgroundColor: '#2FBE34' }}>Zap!</button>
                    </Buttons>
                </div>
            </CartaAberta>
        </>
    )
}

export default Card