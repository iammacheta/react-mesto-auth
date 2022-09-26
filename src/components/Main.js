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

    // обработчик нажатия лайка
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus({ cardID: card._id, isLiked: isLiked })
            .then(
                (newCard) => {
                    setCards(
                        // создаем копию массива, заменив в нем измененную карточку
                        cards.map(
                            (cardElement) => cardElement._id === card._id ? newCard : cardElement
                        )
                    );
                });
    }

    // обработчик удаления карточки
    function handleCardDelete(card) {
        api.deleteCardFromServer({ cardID: card._id })
            .then(() => {
                setCards(
                    // создаем копию массива, исключив из него удалённую карточку
                    cards.filter(cardElement => cardElement._id !== card._id)
                )
            })
    }

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
                            <Card card={cardElement} key={cardElement._id} onCardClick={onCardClickCallback} onCardLike={handleCardLike} onCardDelete={handleCardDelete} /> // ключ обязательно требуется для повторяемого объекта
                        )
                    })
                }
                </ul>
            </section>
        </main>
    )
}

export default Main  