import { useState } from "react"

export default function Login({ onSubmit }) {

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

    function handleLogin(e) {
        e.preventDefault()
        onSubmit(credentials)
    }

    return (
        <div className="form__container">
            <form className="form" name="login" onSubmit={handleLogin}>
                <h3 className="form__title form__title_type_sign">Вход</h3>
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
                    value={credentials.password}
                    onChange={handleChange}
                />
                <span className="form__error link-error" />
                <button
                    className="form__submit form__submit_type_sign" type="submit">
                    Войти
                </button>
            </form>
        </div>
    )
}