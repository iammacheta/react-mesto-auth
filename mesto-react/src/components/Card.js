export default function Card({ card, onCardClick } ) {
    // компонент получает в качестве пропса текущий элемент итерируемого массива
    // и возвращает разметку карточки с подставленными данными

    function handleClick() { 
        onCardClick(card);
    }

    return (
        // шаблон разметки карточки
        <li className="gallery__card">
            <button className="gallery__delete" type="button"></button>
            <img className="gallery__image" src={`${card.link}`} onClick={handleClick} />
            <div className="gallery__caption">
                <h2 className="gallery__text">{card.name}</h2>
                <div className="gallery__likes">
                    <button className="gallery__like" type="button"></button>
                    <span className="gallery__likes-amount">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}