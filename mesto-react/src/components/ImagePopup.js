function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup_type_fs ${card && 'popup_opend'}`} >
            <figure className="popup__fullscreen">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <img className="popup__image" src={`${card.link}`} />
                <figcaption className="popup__caption">{card.name}</figcaption>
            </figure>
        </div >
    )
}

export default ImagePopup