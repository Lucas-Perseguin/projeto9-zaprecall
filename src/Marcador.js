function Marcador({ card }) {
    let nome = 'ellipse-outline'
    let color = '#000000'
    switch (card.Color) {
        case '#FF3030':
            nome = 'close-circle'
            color = '#FF3030'
            break;
        case '#FF922E':
            nome = 'help-circle'
            color = '#FF922E'
            break;
        case '#2FBE34':
            nome = 'checkmark-circle'
            color = '#2FBE34'
            break;
        default:
            break;
    }
    return (
        <ion-icon name={nome} style={{ color: `#${color}` }}></ion-icon>
    )
}

export default Marcador