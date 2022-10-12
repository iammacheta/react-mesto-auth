import PopupWithForm from "./PopupWithForm"

export default function InfoTooltip({ isOpen, onClose, authStatus }) {
    return (
        <div className={`popup ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <div className={`popup__registration-badge ${!authStatus ? 'popup__registration-badge_err' : ''}`}></div>
                <h3 className="form__title form__title_type_registration">{`${authStatus ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
                Попробуйте ещё раз.`}`}</h3>
            </div>
        </div>
    )
}