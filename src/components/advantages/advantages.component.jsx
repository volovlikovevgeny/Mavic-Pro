import React from 'react';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg'


import './advantages.styles.scss';

export default function Advantages() {
    return (
        <section className='page-section-advantages benefits'>
            <div className='container'>
                <h3 className='title'>Преимущества</h3>
                <div className='benefits-items'>
                    <div className='benefits-item'>
                        <div className='benefits__num'>1</div>
                        <div className='benefits__img'>
                            <img src="https://i.ibb.co/5jsfmZ1/benefits-img-1.jpg" alt="" />
                        </div>
                        <div className='benefits__info'>
                            <h4 className='benefits__info-title'>
                                Интеллектуальные режимы
                            </h4>
                            <p className='benefits__info-text'>
                                Mavic 2 унаследовал 6 стандартных режимов интеллектуальной съемки
                                QuickShot:Roket/Dronie/Circle/Helix
                            </p>
                        </div>
                    </div>

                    <div className='benefits-item'>
                        <div className='benefits__num'>2</div>
                        <div className='benefits__img'>
                            <img src="https://i.ibb.co/Qp0G7pj/benfits-img-2.jpg" alt="" />
                        </div>
                        <div className='benefits__info'>
                            <h4 className='benefits__info-title'>
                                Active Track 2.0
                            </h4>
                            <p className='benefits__info-text'>
                                Усовершенствованный режим второго поколения распознаёт и
                                отслеживает объекты ещё точнее, быстрее и умнее.
                            </p>
                        </div>
                    </div>

                    <div className='benefits-item'>
                        <div className='benefits__num'>3</div>
                        <div className='benefits__img'>
                            <img src="https://i.ibb.co/6rRM0F3/benfits-img-3.jpg" alt="" />
                        </div>
                        <div className='benefits__info'>
                            <h4 className='benefits__info-title'>
                                Панорамная съемка
                            </h4>
                            <p className='benefits__info-text'>
                                Mavic 2 поддерживает 4 режима панорамной съёмки:
                                сферическая, 180 градусов, горизонтальная, вертикальная
                            </p>
                        </div>
                    </div>

                    <div className='benefits-item'>
                        <div className='benefits__num'>4</div>
                        <div className='benefits__img'>
                            <img src="https://i.ibb.co/fr00NYC/benfits-img-4.jpg" alt="" />
                        </div>
                        <div className='benefits__info'>
                            <h4 className='benefits__info-title'>
                                Крутая камера!
                            </h4>
                            <p className='benefits__info-text'>
                                Технология Hyperlapse в четырёх режимах исполнения.
                                Улучшенный фото режим HDR
                                Функция HyperLight для съёмки в условиях слабого освещения
                                4К съёмка
                            </p>
                        </div>
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
