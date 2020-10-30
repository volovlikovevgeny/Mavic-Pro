import React from 'react';
import './contacts.styles.scss';

export default function Contacts() {
    return (
        <section className='page-section contacts'>
            <div className='container'>
                <h3 className='title'>Contacts</h3>
                <div className='contact__inner'>
                    <div className="contacts__info">

                        <div className='contacts__info-box'>
                            <p className='contacts__info-box'>Киев</p>
                            <a className='contacts__info-phone' href="#">+8 (050) 567– 67 – 67</a>
                            <a className='contacts__info-email' href="#">dgi.mavic2pro.kiev@mail.ru</a>
                        </div>

                        <div className='contacts__info-box'>
                            <p className='contacts__info-box'>Москва</p>
                            <a className='contacts__info-phone' href="#">+7 (499) 567– 67 – 67</a>
                            <a className='contacts__info-email' href="#">dgi.mavic2pro.moscow@mail.ru</a>
                        </div>

                        <div className='contacts__info-box'>
                            <p className='contacts__info-box'>Минск</p>
                            <a className='contacts__info-phone' href="#">+3 (7517) 567– 67 – 67</a>
                            <a className='contacts__info-email' href="#">dgi.mavic2pro.minsk@mail.ru</a>
                        </div>

                    </div>

                    <div className="contacts__form">
                        <form>
                            <h4 className='contacts__form-title'>
                                Остались вопросы?
                            </h4>
                            <p className='contacts__form-text'>
                                Мы обязательно свяжемся с вами в течение двух рабочих дней
                            </p>
                            <div className='contacts__form-line'>
                                <input type="text" className='contact__form-input' placeholder='Your Name' />
                                <input type="text" className='contact__form-input' placeholder='Your Email' />
                            </div>
                            <textarea className='contacts__form-textarea' placeholder='what your are interesting at?'></textarea>
                            <button className='contact__from-btn' type='submit'>Send</button>
                        </form>
                    </div>

                    <ul className="contacts__social-list">
                        <li className='contacts__social-item'>
                            <a className='contacts__social-link' href="#">
                                <img src="https://i.ibb.co/0CN0NrL/image.png" alt="" />
                            </a>
                        </li>
                        <li className='contacts__social-item'>
                            <a className='contacts__social-link' href="#">
                                <img src="https://i.ibb.co/WD3h0Yv/image.png" alt="" />
                            </a>
                        </li>
                        <li className='contacts__social-item'>
                            <a className='contacts__social-link' href="#">
                                <img src="https://i.ibb.co/w6QLKY6/instagram.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
