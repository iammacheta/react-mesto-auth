import logo from '../images/logo.svg';
import Navigation from './Navigation';
import backgroundOpenNavButton from '../images/header__open-nav-button.svg'
import backgroundProfileCross from '../images/popup-close-button.svg'

import { useRouteMatch } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ onClickLogout, onClickMenu, email, menuIsOpened }) {

    const matchSignup = useRouteMatch('/sign-up')
    const matchSignin = useRouteMatch('/sign-in')

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="логотип" className="header__logo" />
                {matchSignin && <Link to={"/sign-up"} className="header__sign-button">Регистрация</Link>}
                {matchSignup && <Link to={"/sign-in"} className="header__sign-button">Войти</Link>}
                <button
                    className={(matchSignup || matchSignin) ? 'header__open-nav-button header__open-nav-button_closed' : 'header__open-nav-button'}
                    type='button' onClick={onClickMenu}
                    style={{
                        backgroundImage: menuIsOpened ? `url(${backgroundProfileCross})` : `url(${backgroundOpenNavButton})`
                    }} />
            </div>
            <Navigation onClickLogout={onClickLogout} email={email} menuIsOpened={menuIsOpened} />
        </header>
    )
}

export default Header
