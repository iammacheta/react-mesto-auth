import { useContext, useEffect, useState } from "react"
import { api } from "../utils/api"
import Card from "./Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClickCallback }) {
    // onCardClickCallback - нужен для проброса card из Cards в Арр 

    const currentUser = useContext(CurrentUserContext)

    // переменная состояния для карточек
    const [cards, setCards] = useState([])


    // запрашиваем начальные карточки
    useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                // передаем карточки в переменную состояни
                setCards(res)
            })
            .catch((err) => {
                console.log(err) // выведем ошибку в консоль
            })
    }, [])


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
                            <Card card={cardElement} key={cardElement._id} onCardClick={onCardClickCallback} /> // ключ обязательно требуется для повторяемого объекта
                        )
                    })
                }
                </ul>
            </section>
        </main>
    )
}

export default Main 