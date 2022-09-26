import { useState, useEffect, useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm"

export default function EditProfilePopup(props) {

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

    // мы не можем делать запрос в API прямо в этом обработчике, 
    // потому что после его завершения нужно обновить переменную состояния currentUser, 
    // которая находится ещё выше — в компоненте App
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={props.isOpen} //Видимость попапов задается с помощью соответствующей переменной состояния
            onClose={props.onClose} //коблек для закрытия всех попапов
            onSubmit={handleSubmit}
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
