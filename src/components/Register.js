import { Link } from "react-router-dom"

export default function Register() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    return (
        <div className="form__container">
            <form className="form" name="login">
                <h3 className="form__title form__title_type_sign">Вход</h3>

                <input
                    className="form__input form__input_type_sign"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    minLength="2"
                    maxLength="30"
                // value={name}
                // onChange={handleChangeName}
                />
                <span className="form__error name-error" />
                <input
                    className="form__input form__input_type_sign"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                // value={link}
                // onChange={handleChangeLink}
                />
                <span className="form__error link-error" />

                <button
                    className="form__submit form__submit_type_sign" type="submit">
                    Зарегистироваться
                </button>

                <p className="form__sign-in-text">Уже зарегистрированы? <Link to="/sign-in" className="form__sign-in-link">Войти</Link></p>

            </form>
        </div>
    )
}