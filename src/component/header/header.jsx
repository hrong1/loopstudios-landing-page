import './header.scss'
import { useState } from 'react';
import logo from '../../assets/logo.svg';

const WebHeader = ({ sidebarList }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header${isOpen ? ' is-open' : ''}`}>
            <div className='header__logo'>
                <a href='#'>
                    <img src={logo} alt=''/>
                </a>
            </div>
            <nav className="header__nav">
                <button className="header__nav-toggle" 
                    aria-controls="nav-list" 
                    aria-expanded={isOpen} 
                    aria-label="Menu"
                    onClick={handleToggle}>
                </button>
                <ul id="nav-list" className="header__nav-list">
                    {sidebarList.map((itemText) => (
                        <li key={itemText}>
                            <a href="#">{itemText}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default WebHeader;