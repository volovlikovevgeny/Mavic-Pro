import React from 'react';
import './navigation.styles.scss';

import Logo from '../../assets/img/Logo.svg';

import { Link } from 'react-scroll';

class Navigation extends React.Component {


    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }


    clicking = () => (
        this.setState({
            isOpen: !this.state.isOpen
        })
    )


    render() {
        const { isOpen } = this.state

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
                            <ul className={`menu__list ${isOpen ? 'active' : ' '}`}>
                                <li className='menu__list-item'>
                                    <Link
                                        activeClass='active'
                                        to='product'
                                        spy={true}
                                        smooth={true}
                                        offset={70}
                                        duration={700}
                                        className='menu__list-link' >О ДРОНЕ</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link activeClass='active'
                                        to='benefits'
                                        spy={true}
                                        smooth={true}
                                        offset={70}
                                        duration={700} className='menu__list-link' >ПРЕИМУЩЕСТВА</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link activeClass='active'
                                        to='specification'
                                        spy={true}
                                        smooth={true}
                                        offset={70}
                                        duration={700} className='menu__list-link'>ХАРАКТЕРИСТИКИ</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link activeClass='active'
                                        to='questions'
                                        spy={true}
                                        smooth={true}
                                        offset={70}
                                        duration={700} className='menu__list-link' >ВОПРОСЫ</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link activeClass='active'
                                        to='contacts'
                                        spy={true}
                                        smooth={true}
                                        offset={70}
                                        duration={700} className='menu__list-link'>КОНТАКТЫ</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__info">
                            <button className='header__btn'>Buy</button>
                            <a className='header__phone' href="tel:89772850461">8 (977) 285 04 61</a>
                        </div>
                        <div onClick={this.clicking}><span className='hamburger'>&#9776;</span></div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation;