import styled from "styled-components"
import setinha from "./images/setinha.png"
import { useState } from "react"

const CartaFechada = styled.div`
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    button{
        border: none;
        background: none;
        height: 32px;
        width: 26px;
        *{
            width: 100%;
            height: 100%;
        }
    }
    button:hover{
        cursor: pointer;
        background-color: lightgrey;
    }
    button:disabled{
        cursor: default;
        background: none;
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
    img:hover{
        cursor: pointer;
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
    button:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

function MarcadorCard({ color }) {
    let nome = 'play-outline'
    switch (color) {
        case '#FF3030':
            nome = 'close-circle'
            break;
        case '#FF922E':
            nome = 'help-circle'
            break;
        case '#2FBE34':
            nome = 'checkmark-circle'
            break;
        default:
            break;
    }
    return (
        <ion-icon name={nome} style={{ color: `${color}` }} data-identifier="flashcard-status"></ion-icon>
    )
}

function Card({ card, index, contador, setContador, deckJogo, setDeckJogo, contadorCorretas, setContadorCorretas, meta }) {
    const [cartaAberta, setCartaAberta] = useState(false)
    const [mostrarResposta, setMostrarResposta] = useState(false)
    const [respondido, setRespondido] = useState(false)
    const [corReposta, setCorResposta] = useState('#000000')

    function responder(cor) {
        setCorResposta(cor)
        setRespondido(true)
        setMostrarResposta(false)
        setCartaAberta(false)
        setContador(contador + 1)
        let auxCard = { ...card, Color: cor }
        let auxDeck = [...deckJogo]
        auxDeck[index] = { ...auxCard }
        setDeckJogo(auxDeck)
        console.log(auxDeck)
        if (cor === '#2FBE34') {
            setContadorCorretas(contadorCorretas + 1)
            if (contadorCorretas === meta - 1) {
                alert('Parabens voc?? concluiu sua meta de Zaps!!!')
            }
        }
        if (contador === deckJogo.length - 1 && ((cor !== '#2FBE34' && contadorCorretas < meta) || (cor === '2FBE34' && contadorCorretas < meta - 1))){
            alert('Puts! N??o foi dessa vez\nMas continue tentando!!!')
        }

    }

    return (
        <div className="flashcard" data-identifier="flashcard">
            <CartaFechada style={cartaAberta ? { display: 'none' } : { display: 'flex' } } data-identifier="flashcard-index-item">
                <h2 style={respondido ? { color: `${corReposta}`, textDecoration: 'line-through' } : { color: 'black' }}>Pergunta {index + 1}</h2>
                <button onClick={() => setCartaAberta(true)} disabled={respondido} data-identifier="flashcard-show-btn">
                    <MarcadorCard color={corReposta} />
                </button>
            </CartaFechada>
            <CartaAberta style={cartaAberta ? { display: 'block' } : { display: 'none' }}>
                <div style={mostrarResposta ? { display: 'none' } : { display: 'block' }}>
                    <h2 data-identifier="flashcard-question">{card.Q}</h2>
                    <img src={setinha} alt="Mostrar Resposta" onClick={() => setMostrarResposta(true)} data-identifier="flashcard-turn-btn"/>
                </div>
                <div style={mostrarResposta ? { display: 'block' } : { display: 'none' }}>
                    <h2 data-identifier="flashcard-answer">{card.A}</h2>
                    <Buttons>
                        <button onClick={() => responder('#FF3030')} style={{ backgroundColor: '#FF3030' }} data-identifier="forgot-btn">N??o lembrei</button>
                        <button onClick={() => responder('#FF922E')} style={{ backgroundColor: '#FF922E' }} data-identifier="almost-forgot-btn">Quase n??o lembrei</button>
                        <button onClick={() => responder('#2FBE34')} style={{ backgroundColor: '#2FBE34' }} data-identifier="zap-btn">Zap!</button>
                    </Buttons>
                </div>
            </CartaAberta>
        </div>
    )
}

export default Card