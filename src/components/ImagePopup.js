function ImagePopup({ card, onClose }) {

    function isNotEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }

    return (
        <div className={`popup popup_type_fs ${(isNotEmpty(card)) && 'popup_opend'}`} >
            <figure className="popup__fullscreen">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <img className="popup__image" src={`${card.link}`} />
                <figcaption className="popup__caption">{card.name}</figcaption>
            </figure>
        </div >
    )

}

export default ImagePopup