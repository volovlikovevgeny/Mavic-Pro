import React from 'react';
import './home-styles.scss';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg'
import Instagram from '../../assets/img/instagram.svg';
import YouTube from '../../assets/img/youtube.svg';
import FaceBook from '../../assets/img/facebook.svg';

const Home = () => (
    <section className='page-section-home top'  >
        <div className='container'>
            <div className='top__inner'>
                <h1 className='top__title'>Mavic 2 Pro</h1>
                <img src="https://i.ibb.co/XJBM8rm/mavic.png" alt="" />
                <p className='top__text'>
                    Квадрокоптер Dji Mavic 2 Pro с профессиональной камерой Hasselblad
                </p>
                <ul className="top__social-list">
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src={Instagram} alt="facebook" />
                        </a>
                    </li>
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src={YouTube} alt="youtube" />
                        </a>
                    </li>
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src={FaceBook} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='scroll__btn'>
            <a href="#">
                <ArrowDownSvg />
            </a>
        </div>
    </section>
)

export default Home;