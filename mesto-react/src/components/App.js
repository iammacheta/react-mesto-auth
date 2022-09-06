

function App() {
  return (
    <div className="App">

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form action="save" className="form" name="profile-info" noValidate >
            <h3 className="form__title">Редактировать профиль</h3>
            <input className="form__input form__input_type_name" type="text" placeholder="Имя" name="name"
              value="" required minLength="2" maxLength="40" />
            <span className="form__error name-error"></span>
            <input className="form__input form__input_type_job" type="text" placeholder="Вид деятельности" name="job"
              value="" required minLength="2" maxLength="200" />
            <span className="form__error job-error"></span>
            <button className="form__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form action="save" className="form" name="new-place" noValidate >
            <h3 className="form__title">Новое место</h3>
            <input className="form__input form__input_type_card-name" type="text" name="name" placeholder="Название"
              required minLength="2" maxLength="30" />
            <span className="form__error name-error"></span>
            <input className="form__input form__input_type_card-url" type="url" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="form__error link-error"></span>
            <button className="form__submit" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_fs">
        <figure className="popup__fullscreen">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__image" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>

      <div className="popup popup_type_delete-confirm">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form action="save" className="form" name="delete-confirm" noValidate>
            <h3 className="form__title form__title_type_delete-confirm">Вы уверены?</h3>
            <button className="form__submit form__submit_type_delete-confirm" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form action="save" className="form" name="new-place" noValidate>
            <h3 className="form__title">Обновить аватар</h3>
            <input className="form__input form__input_type_update-avatar" type="url" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="form__error link-error"></span>
            <button className="form__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

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
