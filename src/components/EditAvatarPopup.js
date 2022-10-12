import { useRef } from "react"
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {

    // используем реф, чтобы получить прямой доступ к DOM-элементу инпута и его значению
    const avatarRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value // Значение инпута, полученное с помощью рефа
        });
    }

    return (
        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
        >
            <input
                className="form__input form__input_type_update-avatar"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
                ref={avatarRef}
            />
            <span className="form__error link-error" />
        </PopupWithForm>
    )
}  