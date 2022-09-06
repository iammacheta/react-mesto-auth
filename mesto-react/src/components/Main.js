function Main() {

    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector('.popup_type_update-avatar')
        popupAvatar.classList.add('popup_opend')
    }

    function handleEditProfileClick() {
        const popupProfile = document.querySelector('.popup_type_edit-profile')
        popupProfile.classList.add('popup_opend')
    }

    function handleAddPlaceClick() {
        const popupAddCard = document.querySelector('.popup_type_add-card')
        popupAddCard.classList.add('popup_opend')
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__image" onClick={handleEditAvatarClick}></div>
                <div className="profile__name-container">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                    <p className="profile__job"></p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
            <section>
                <ul className="gallery"></ul>
            </section>
        </main>
    )
}

export default Main