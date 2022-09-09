import { useEffect, useState } from "react"
import { api } from "../utils/api"

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

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
                            // шаблон разметки карточки
                            <li className="gallery__card" key={cardElement._id}>
                                <button className="gallery__delete" type="button"></button>
                                <img className="gallery__image" src={`${cardElement.link}`} />
                                <div className="gallery__caption">
                                    <h2 className="gallery__text">{cardElement.name}</h2>
                                    <div className="gallery__likes">
                                        <button className="gallery__like" type="button"></button>
                                        <span className="gallery__likes-amount">{cardElement.likes.length}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }</ul>
            </section>
        </main>
    )
}

export default Main 