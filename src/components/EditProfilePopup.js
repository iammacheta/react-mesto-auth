import PopupWithForm from "./PopupWithForm"

export default function EditProfilePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen} //Видимость попапов задается с помощью соответствующей переменной состояния
            onClose={onClose} //коблек для закрытия всех попапов
        >
            <input
                className="form__input form__input_type_name"
                type="text"
                placeholder="Имя"
                name="name"
                required
                minLength="2"
                maxLength="40"
            />
            <span className="form__error name-error"></span>
            <input
                className="form__input form__input_type_job"
                type="text"
                placeholder="Вид деятельности"
                name="job"
                required
                minLength="2"
                maxLength="200"
            />
            <span className="form__error job-error"></span>
            <button className="form__submit" type="submit">Сохранить</button>
        </PopupWithForm>
    )
}
