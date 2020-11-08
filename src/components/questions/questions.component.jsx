import React from 'react';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg'
import { Link } from 'react-scroll';

import './questions.styles.scss';

class Questions extends React.Component {

    constructor() {
        super()

        this.state = {
            isHidden1: true,
            isHidden2: true,
            isHidden3: true,
            isHidden4: true,

        }
    }

    isHidden1 = () => {
        this.setState({ isHidden1: !this.state.isHidden1 })
    }
    isHidden2 = () => {
        this.setState({ isHidden2: !this.state.isHidden2 })
    }
    isHidden3 = () => {
        this.setState({ isHidden3: !this.state.isHidden3 })
    }
    isHidden4 = () => {
        this.setState({ isHidden4: !this.state.isHidden4 })
    }

    render() {
        return (
            <section className='page-section questions' id='questions'>
                <div className='container'>
                    <h3 className='title'>Остались вопросы?</h3>
                    <div className='questions__items'>
                        <div className='questions__item'>
                            <h4 style={{ fontWeight: '500' }} className='questions__item-title' onClick={this.isHidden1} >
                                Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?
                            </h4>
                            <p style={{ fontWeight: '300' }} className='questions__item-text' style={this.state.isHidden1 ? { display: 'none' } : { display: 'block' }}>
                                В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                                </p>
                        </div>

                        <div className='questions__item'>
                            <h4 style={{ fontWeight: '500' }} className='questions__item-title' onClick={this.isHidden2} >
                                Чем Mavic 2 лучше Mavic Pro?
                            </h4>
                            <p style={{ fontWeight: '300' }} className='questions__item-text' style={this.state.isHidden2 ? { display: 'none' } : { display: 'block' }}>
                                В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                                </p>
                        </div>

                        <div className='questions__item'>
                            <h4 style={{ fontWeight: '500' }} className='questions__item-title' onClick={this.isHidden3}>
                                Можно ли подключить Mavic 2 к очкам DJI Goggles?
                            </h4>
                            <p style={{ fontWeight: '300' }} className='questions__item-text' style={this.state.isHidden3 ? { display: 'none' } : { display: 'block' }}>
                                В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                                </p>
                        </div>

                        <div className='questions__item'>
                            <h4 style={{ fontWeight: '500' }} className='questions__item-title' onClick={this.isHidden4}>
                                Является ли Mavic 2 водонепроницаемым？
                            </h4>
                            <p style={{ fontWeight: '300' }} className='questions__item-text' style={this.state.isHidden4 ? { display: 'none' } : { display: 'block' }}>
                                В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                                </p>
                        </div>
                    </div>

                </div>
                <div className='scroll__btn'>
                    <Link
                        style={{ cursor: 'pointer' }}
                        activeClass='active'
                        to='contacts'
                        spy={true}
                        smooth={true}
                        offset={70}
                        duration={700}
                    >
                        <ArrowDownSvg />
                    </Link>
                </div>
            </section>
        )
    }
}

export default Questions;
