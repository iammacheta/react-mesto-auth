import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card({ card, onCardClick }) {
    // компонент получает в качестве пропса текущий элемент итерируемого массива
    // и возвращает разметку карточки с подставленными данными

    // подписываемся на контекст
    const currentUser = useContext(CurrentUserContext)

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `gallery__delete ${!isOwn && 'gallery__delete_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `gallery__like ${isLiked && 'gallery__like_active'}`;

    // Колбек, пробрасывает card в Main, а оттуда в Арр
    function handleClick() {
        onCardClick(card);
    }

    return (
        // шаблон разметки карточки
        <li className="gallery__card">
            <button className={cardDeleteButtonClassName} type="button" />
            <img className="gallery__image" src={`${card.link}`} alt={`${card.name}`} onClick={handleClick} />
            <div className="gallery__caption">
                <h2 className="gallery__text">{card.name}</h2>
                <div className="gallery__likes">
                    <button className={cardLikeButtonClassName} type="button" />
                    <span className="gallery__likes-amount">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}