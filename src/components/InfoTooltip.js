export default function InfoTooltip({ isOpen, onClose, registrationStatus }) {
    return (
        <div className={`popup ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <div className={`popup__registration-badge ${!registrationStatus ? 'popup__registration-badge_err' : ''}`} />
                <h3
                    className="form__title form__title_type_registration">
                    {`${registrationStatus ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
                    Попробуйте ещё раз.`}`}
                </h3>
            </div>
        </div>
    )
}