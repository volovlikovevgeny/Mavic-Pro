import React from 'react';
import './navigation.styles.scss';

import Logo from '../../assets/img/Logo.svg';

class Navigation extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='header__inner'>
                        <a className='logo' href="#">
                            <picture>
                                <source srcSet='https://i.ibb.co/dfXNkjd/logo-mobile.png' media="(max-width: 600px)" />
                                <img src={Logo} alt="logo" />
                            </picture>
                        </a>
                        <nav className='menu'>
                            <ul className='menu__list'>
                                <li className='menu__list-item'><a className='menu__list-link' href="#product">О ДРОНЕ</a></li>
                                <li className='menu__list-item'><a className='menu__list-link' href="#">ПРЕИМУЩЕСТВА</a></li>
                                <li className='menu__list-item'><a className='menu__list-link' href="#">ХАРАКТЕРИСТИКИ</a></li>
                                <li className='menu__list-item'><a className='menu__list-link' href="#questions">ВОПРОСЫ</a></li>
                                <li className='menu__list-item'><a className='menu__list-link' href="#">КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                        <div className="header__info">
                            <button className='header__btn'>Buy</button>
                            <a className='header__phone' href="tel:89772850461">8 (977) 285 04 61</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation;