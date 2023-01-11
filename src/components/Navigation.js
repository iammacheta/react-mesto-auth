import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"

export default function Navigation({ onClickLogout, email, menuIsOpened }) {

    const matchSignup = useRouteMatch('/signup')
    const matchSignin = useRouteMatch('/signin')

    return (
        <>
            {!(matchSignup || matchSignin) &&
                <div className={menuIsOpened ? 'header__nav' : 'header__nav header__nav_closed'}>
                    <span className="header__email">{email}</span>
                    <Link to={"/signin"} className="header__link" onClick={onClickLogout}>Выйти</Link>
                </div >}
        </>

    )
}