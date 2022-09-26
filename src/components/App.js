import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  // Переменные состояния, отвечающие за видимость попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  // Переменная состояния для выбраной карточки
  const [selectedCard, setSelectedCard] = useState({})

  // Переменная состояния для данных пользователя
  const [currentUser, setCurrentUser] = useState({ name: '', about: '', avatar: '' })

  // Обработчики событий для открытия попапов (при клике на кнопку)
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  // Обработчик закрытия всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)

    setSelectedCard('')
  }

  // Колбек для открытия карточки в фулскрин
  function handleCardClick(card) {
    setSelectedCard(card)

  }

  function handleUpdateUser({ name, about }) {
    api.updateProfileInfo({ name: name, about: about })
      .then((res) => {
        // setCurrentUser({ name: res.name, about: res.about, avatar: res.avatar })
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err) // выведем ошибку в консоль
      })
      .finally(() => {
        closeAllPopups()
      })
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar({ avatarLink: avatar })
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err) // выведем ошибку в консоль
      })
      .finally(() => {
        closeAllPopups()
      })
  }

  // эффект, вызываемый при монтировании компонента
  // будет совершать запрос в API за пользовательскими данными
  useEffect(() => {
    api.getProfileInfo()
      .then((res) => {
        // После получения ответа задаем полученные данные в соответствующие переменные состояния
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err) // выведем ошибку в консоль
      })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClickCallback={handleCardClick}

        />
        <Footer />
        {/* Добавляю компонент попапов с children кодом внутри. Общая разметка, отличия приходят в компонент через children */}

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="form__input form__input_type_card-name"
            type="text"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="form__error name-error"></span>
          <input
            className="form__input form__input_type_card-url"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__error link-error"></span>
          <button className="form__submit" type="submit">Создать</button>
        </PopupWithForm>

        <PopupWithForm
          name="delete-confirm"
          title="Вы уверены?"
          onClose={closeAllPopups}
        >
          <button className="form__submit form__submit_type_delete-confirm" type="submit">Да</button>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
