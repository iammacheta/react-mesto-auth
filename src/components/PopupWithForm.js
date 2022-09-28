function PopupWithForm({ name, title, isOpen, onClose, onSubmit, children, isLoading }) {
    // isOpen отвечает за видимость попапа, в JSX будет задаваться CSS-класс на его основе
    // onClose колбек закрытия поапов, дергает функцию сеттер, в результате isOpen становится false

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <form className="form" name={`${name}`} onSubmit={onSubmit} >
                    <h3 className="form__title">{`${title}`}</h3>
                    {children}
                    <button
                        className="form__submit" type="submit">
                        {isLoading ? 'Сохранение...' : 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm 