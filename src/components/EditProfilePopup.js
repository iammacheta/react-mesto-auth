import { useState, useEffect, useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm"

export default function EditProfilePopup({ isOpen, onClose }) {

    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext)

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    // стейт-переменные значений полей формы
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // Обработчики изменения инпута, обновляют стейт
    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

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
                onChange={handleChangeName}
                value={name}
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
                onChange={handleChangeDescription}
                value={description}
            />
            <span className="form__error job-error"></span>
            <button className="form__submit" type="submit">Сохранить</button>
        </PopupWithForm>
    )
}
