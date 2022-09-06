function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button"></button>
                <form action="save" className="form" name={`${props.name}`} noValidate >
                    <h3 className="form__title">{`${props.title}`}</h3>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm