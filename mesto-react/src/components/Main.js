function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main>
            <section className="profile">
                <div className="profile__image" onClick={onEditAvatar}></div>
                <div className="profile__name-container">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__job"></p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                debugger
            </section>
            <section>
                <ul className="gallery"></ul>
            </section>
        </main>
    )
}

export default Main