import React from 'react';
import './home-styles.scss';
import { ReactComponent as ArrowDownSvg } from '../../assets/img/arrow-down.svg'

const Home = () => (
    <section className='page-section-home top' style={{ borderBottom: '1px solid black' }}>
        <div className='container'>
            <div className='top__inner'>
                <h1 className='top__title'>Macic 2 Pro</h1>
                <img src="https://i.ibb.co/XJBM8rm/mavic.png" alt="" />
                <p className='top__text'>
                    Квадрокоптер Dji Mavic 2 Pro с профессиональной камерой Hasselblad
                </p>
                <ul className="top__social-list">
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src="https://i.ibb.co/0CN0NrL/image.png" alt="facebook" />
                        </a>
                    </li>
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src="https://i.ibb.co/WD3h0Yv/image.png" alt="youtube" />
                        </a>
                    </li>
                    <li className='top__social-item'>
                        <a className='top__social-link' href="#">
                            <img src="https://i.ibb.co/w6QLKY6/instagram.png" alt="instagram" />
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