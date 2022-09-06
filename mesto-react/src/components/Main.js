function Main() {
    return (
        <main>
            <section className="profile">
                <div className="profile__image"></div>
                <div className="profile__name-container">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" type="button"></button>
                    <p className="profile__job"></p>
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>
            <section>
                <ul className="gallery"></ul>
            </section>
        </main>
    )
}

export default Main