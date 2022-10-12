import { Link, useLocation } from "react-router-dom"

export default function Navigation({ onClick, email }) {

    const { pathname } = useLocation()

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
            <Link to={data.url} className="header__link" onClick={onClick}>{data.text} </Link>
        </div >
    )
}