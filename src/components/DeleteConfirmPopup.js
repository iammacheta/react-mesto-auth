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
            isLoading={props.isLoading}
        >
        </PopupWithForm>
    )
}