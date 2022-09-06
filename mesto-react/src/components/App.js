import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* Добавляю компонент попапов с children кодом внутри. Общая разметка, отличия приходят в компонент через children */}
      <PopupWithForm name="edit-profile" title="Редактировать профиль">
        <input className="form__input form__input_type_name" type="text" placeholder="Имя" name="name"
          value="" required minLength="2" maxLength="40" />
        <span className="form__error name-error"></span>
        <input className="form__input form__input_type_job" type="text" placeholder="Вид деятельности" name="job"
          value="" required minLength="2" maxLength="200" />
        <span className="form__error job-error"></span>
        <button className="form__submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место">
        <input className="form__input form__input_type_card-name" type="text" name="name" placeholder="Название"
          required minLength="2" maxLength="30" />
        <span className="form__error name-error"></span>
        <input className="form__input form__input_type_card-url" type="url" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="form__error link-error"></span>
        <button className="form__submit" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="update-avatar" title="Обновить аватар">
        <input className="form__input form__input_type_update-avatar" type="url" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="form__error link-error"></span>
        <button className="form__submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="delete-confirm" title="Вы уверены?">
        <button className="form__submit form__submit_type_delete-confirm" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup />

      <template id="card-template">
        <li className="gallery__card">
          <button className="gallery__delete" type="button"></button>
          <img className="gallery__image" />
          <div className="gallery__caption">
            <h2 className="gallery__text"></h2>
            <div className="gallery__likes">
              <button className="gallery__like" type="button"></button>
              <span className="gallery__likes-amount">0</span>
            </div>

          </div>
        </li>
      </template>

    </div>
  )
}

export default App;
