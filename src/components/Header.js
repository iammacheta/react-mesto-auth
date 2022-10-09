import logo from '../images/logo.svg';
import Navigation from './Navigation';

function Header() {

    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" />
            <Navigation />
        </header>
    )
}

export default Header