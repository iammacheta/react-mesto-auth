import logo from '../images/logo.svg';
import Navigation from './Navigation';

function Header({ onClick, email }) {

    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" />
            <Navigation onClick={onClick} email={email} />
        </header>
    )
}

export default Header