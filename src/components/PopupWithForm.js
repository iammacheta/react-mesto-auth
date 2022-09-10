function PopupWithForm({ name, title, isOpen, onClose, children }) {
    // isOpen отвечает за видимость попапа, в JSX будет задаваться CSS-класс на его основе
    // onClose колбек закрытия поапов, дергает функцию сеттер, в результате isOpen становится false

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <form action="save" className="form" name={`${name}`} noValidate >
                    <h3 className="form__title">{`${title}`}</h3>
                    {children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm 