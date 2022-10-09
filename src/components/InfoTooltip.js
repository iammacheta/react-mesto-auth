import PopupWithForm from "./PopupWithForm"

export default function InfoTooltip({ isOpen, onClose }) {

    let regStatus = false

    let title = `Что-то пошло не так!
    Попробуйте ещё раз.`

    if (regStatus) {
        title = 'Вы успешно зарегистрировались!'
    }

    return (
        <div className={`popup ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <div className={`popup__registration-badge ${!regStatus ? 'popup__registration-badge_err' : ''}`}></div>
                <h3 className="form__title form__title_type_registration">{`${title}`}</h3>
            </div>
        </div>
    )
}