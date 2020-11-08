import React from 'react';
import './products.styles.scss';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg';

import { Link } from 'react-scroll';

export default class Products extends React.Component {

    constructor() {
        super()

        this.state = {
            images:
                ['https://i.ibb.co/v302mbs/slider-img.png',
                    'https://i.ibb.co/k3fCsMG/funsky-s20-review.jpg',

                ],
            currentImageIndex: 0,
            isCycleMode: false
        };

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler(e) {
        let newIndex = this.state.currentImageIndex;

        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = this.state.currentImageIndex + 1
            }

        }
        else {
            if (newIndex > 0) {
                newIndex = this.state.currentImageIndex - 1
            }
        }

        this.setState({
            currentImageIndex: newIndex
        });
    }

    render() {
        return (
            <section className='page-section products' id='product'>
                <div className='container'>
                    <h3 className='title products__title'>
                        Что такое Mavic 2 Pro?
                    </h3>
                    <div className='products__inner'>
                        <div className="products__text">
                            <p>Дрон Mavic 2 Pro - это инженерное чудо,
                            идеальное для аэросъемки. Дрон обладает всеми лучшими технологиями DJI,
                            он преобразит мир аэросъемки.
                                </p>
                            <p>Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c.
                            Камера L1D-20c работает по уникальной технологии Hasselblad Natural Colour Solution
                            (HNCS)5, позволяющей пользователям делать великолепные снимки
                            с воздуха с разрешением в 20 мегапикселей и потрясающими цветами.
                                </p>
                        </div>
                        <div className='products__slider-box'>
                            <p className='products__slider-text'>
                                Лучшая беспилотная технология аэросъемки
                                   </p>
                            <div className='products__slider'>
                                <div className="products__slider-item">
                                    <img src={this.state.images[this.state.currentImageIndex]} alt="" />
                                </div>
                            </div>
                            <div className='products__slider-btn'>
                                <button className='product__left-btn' data-direction='prev' onClick={this.nextSlideHandler}>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.21839 1L1 9L9.21839 17" stroke="white" />
                                    </svg>
                                </button>
                                <button className='product__right-btn' data-direction='next' onClick={this.nextSlideHandler} >
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.78161 17L9 9L0.78161 1" stroke="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scroll__btn'>
                    <Link
                        style={{ cursor: 'pointer' }}
                        activeClass='active'
                        to='benefits'
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
