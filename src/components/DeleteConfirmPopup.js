import PopupWithForm from "./PopupWithForm"

export default function DeleteConfirmPopup(props) {

    function handleSubmit(e) {
        e.preventDefault()
        props.onDeleteCard(props.cardToDelete)
    }

    return (
        <PopupWithForm
            name="delete-confirm"
            title="Вы уверены?"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        >
            <button className="form__submit form__submit_type_delete-confirm" type="submit">Да</button>
        </PopupWithForm>
    )
}