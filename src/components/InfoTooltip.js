export default function InfoTooltip({ isOpen, onClose, infoTooltipType, infoTooltipText }) {
    return (
        <div className={`popup ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <div className={`popup__info-tooltip ${!infoTooltipType ? 'popup__info-tooltip_err' : ''}`} />
                <h3
                    className="form__title form__title_type_registration">
                    {infoTooltipText}
                </h3>
            </div>
        </div>
    )
}

// ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
// Попробуйте ещё раз.`}`}