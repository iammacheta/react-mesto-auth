import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Navigation() {

    const { pathname } = useLocation()

    const email = "email@mail.com" //тут нужно будет прокидывать данные пользователя и забирать из них почту

    let data = {
        url: "/sign-in",
        text: "Выйти",
        email: false
    }

    if (pathname === "/sign-in") {
        data.url = "sign-up"
        data.text = "Регистрация"
    } else if (pathname === "/sign-up") {
        data.text = "Войти"
    } else {
        data.email = true
    }

    return (
        <div className="header__nav">
            {data.email && <span className="header__email">{email}</span>}
            <Link to={data.url} className="header__link">{data.text}</Link>

        </div>
    )
}