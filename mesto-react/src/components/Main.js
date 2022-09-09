import { useEffect, useState } from "react"
import { api } from "../utils/api"
import Card from "./Card"

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {

    // переменные состояния для данных профиля
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState()

    // переменная состояния для карточек
    const [cards, setCards] = useState([])

    // эффект, вызываемый при монтировании компонента
    // будет совершать запрос в API за пользовательскими данными
    useEffect(() => {
        api.getProfileInfo()
            .then((res) => {
                // После получения ответа задаем полученные данные в соответствующие переменные состояния
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch((err) => {
                console.log(err) // выведем ошибку в консоль
            })
    }, [])

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
                <div className="profile__image" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
                <div className="profile__name-container">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                debugger
            </section>
            <section>
                <ul className="gallery">{
                    // итерация по массиву с карточками, вставляем данные из ответа в разметку и возвращаем разметку
                    cards.map(cardElement => {
                        return (
                            <Card card={cardElement} key={cardElement._id} onCardClick={handleCardClick} /> // ключ обязательно требуется для повторяемого объекта
                        )
                    })
                }
                </ul>
            </section>
        </main>
    )
}

export default Main 