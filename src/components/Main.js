import { useContext } from "react"
import Card from "./Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClickCallback, cards, onCardLike, onCardDelete }) {
    // onCardClickCallback - нужен для проброса card из Cards в Арр 

    const currentUser = useContext(CurrentUserContext)
    // const loggedIn = useContext(LoggedInStatus)

    return (
        <main>
            <section className="profile">
                <div
                    className="profile__image"
                    onClick={onEditAvatar}
                    style={{ backgroundImage: `url(${currentUser.avatar})` }}>
                </div>
                <div className="profile__name-container">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} />
                    <p className="profile__job">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace} />
            </section>
            <section>
                <ul className="gallery">{
                    // итерация по массиву с карточками, вставляем данные из ответа в разметку и возвращаем разметку
                    cards.map(cardElement => {
                        return (
                            <Card card={cardElement} key={cardElement._id} onCardClick={onCardClickCallback} onCardLike={onCardLike} onCardDelete={onCardDelete} /> // ключ обязательно требуется для повторяемого объекта
                        )
                    })
                }
                </ul>
            </section>
        </main>
    )
}

export default Main