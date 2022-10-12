import { useEffect, useState } from "react"
import PopupWithForm from "./PopupWithForm"

export default function AddPlacePopup(props) {

    //Очищаем инпуты только при открытии
    useEffect(() => {
        setName('')
        setLink('')
    }, [props.isOpen])

    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: name,
            url: link
        })
    }

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
        >
            <input
                className="form__input form__input_type_card-name"
                type="text"
                name="name"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
                value={name}
                onChange={handleChangeName}
            />
            <span className="form__error name-error" />
            <input
                className="form__input form__input_type_card-url"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
                value={link}
                onChange={handleChangeLink}
            />
            <span className="form__error link-error" />
        </PopupWithForm>
    )
}