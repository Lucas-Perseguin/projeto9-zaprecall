function Marcador({ card }) {
    if (card.Color === undefined){
        return (
            <ion-icon name='ellipse-outline' style={{ color: `#000000` }}></ion-icon>
        )
    }
    let name = ""
    switch (card.Color) {
        case '#FF3030':
            name = 'close-circle'
            break;
        case '#FF922E':
            name = 'help-circle'
            break;
        case '#2FBE34':
            name = 'checkmark-circle'
            break;
        default:
            name = 'ellipse-outline'
            break;
    }
    return (
        <ion-icon name={name} style={{ color: `${card.Color}` }}></ion-icon>
    )
}

export default Marcador