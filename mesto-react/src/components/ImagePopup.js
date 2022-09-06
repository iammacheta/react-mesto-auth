function ImagePopup() {
    return (
        <div className="popup popup_type_fs">
            <figure className="popup__fullscreen">
                <button className="popup__close-button" type="button"></button>
                <img className="popup__image" />
                <figcaption className="popup__caption"></figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup