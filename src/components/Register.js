import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register({ onSubmit }) {

    const [credentials, setCredentials] = useState({
        password: '',
        email: ''
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials({
            ...credentials, //Важно прокинуть остальные поля, чтобы не перезареть их
            [name]: value
        })
    }

    function handleRegister(e) {
        e.preventDefault()
        onSubmit(credentials)
    }

    return (
        <form className="form" name="login" onSubmit={handleRegister}>
            <h3 className="form__title form__title_type_sign">Регистрация</h3>
            <input
                className="form__input form__input_type_sign"
                type="email"
                name="email"
                placeholder="Email"
                required
                minLength="2"
                maxLength="30"
                value={credentials.email}
                onChange={handleChange}
            />
            <span className="form__error name-error" />
            <input
                className="form__input form__input_type_sign"
                type="password"
                name="password"
                placeholder="Пароль"
                required
                value={credentials.link}
                onChange={handleChange}
            />
            <span className="form__error link-error" />
            <button
                className="form__submit form__submit_type_sign" type="submit">
                Зарегистрироваться
            </button>
            <p className="form__sign-in-text">Уже зарегистрированы? <Link to="/signin" className="form__sign-in-link">Войти</Link></p>

        </form>
    )
}