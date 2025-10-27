import './header.scss'
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import imgMobile from '../../assets/mobile/image-hero.jpg';
import imgDesktop from '../../assets/desktop/image-hero.jpg';

const WebHeader = ({ sidebarList }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header${isOpen ? ' is-open' : ''}`}>
            <picture className='header__image-container'>
                <source 
                    media="(min-width: 50rem)" 
                    srcSet={imgDesktop} 
                />
                <img 
                    className='header__image'
                    src={imgMobile} 
                    alt="A person wearing virtual reality goggles and holding a racing wheel sits in a gaming chair. The scene is lit with vibrant purple and red hues, evoking an immersive, futuristic atmosphere."
                />
            </picture>
            <h1 className='header__title'>
                Immersive experiences that deliver
            </h1>
            <div className='header__top'>
                <div className='header__logo'>
                    <a href='#'>
                        <img src={logo} alt=''/>
                    </a>
                </div>
                <nav className="header__nav" aria-label="Sidebar">
                    <button className="header__nav-toggle" 
                        aria-controls="nav-list"
                        type='button' 
                        aria-expanded={isOpen} 
                        aria-label="Menu"
                        onClick={handleToggle}>
                    </button>
                    <ul className="header__nav-list">
                        {sidebarList.map((itemText) => (
                            <li key={itemText}>
                                <a href="#">{itemText}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default WebHeader;