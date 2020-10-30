import React from 'react';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg'


import './questions.styles.scss';


export default function Questions() {
    return (
        <section className='page-section questions'>
            <div className='container'>
                <h3 className='title'>Остались вопросы?</h3>
                <div className='questions__items'>

                    <div className='questions__item'>
                        <h4 className='questions__item-title'>
                            Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?
                        </h4>
                        <p className='questions__item-text'>
                            В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                            полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                            направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                    </div>

                    <div className='questions__item'>
                        <h4 className='questions__item-title'>
                            Чем Mavic 2 лучше Mavic Pro?
                        </h4>
                        <p className='questions__item-text'>
                            В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                            полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                            направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                    </div>

                    <div className='questions__item'>
                        <h4 className='questions__item-title'>
                            Можно ли подключить Mavic 2 к очкам DJI Goggles?
                        </h4>
                        <p className='questions__item-text'>
                            В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                            полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                            направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                    </div>

                    <div className='questions__item'>
                        <h4 className='questions__item-title'>
                            Является ли Mavic 2 водонепроницаемым？
                        </h4>
                        <p className='questions__item-text'>
                            В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала,
                            полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                            направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                    </div>
                </div>

            </div>
            <div className='scroll__btn'>
                <a href="#">
                    <ArrowDownSvg />
                </a>
            </div>
        </section>
    )
}
