import './footer.jsx'
import logo from '../../assets/logo.svg';

const WebFooter = ({ itemsList }) => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <a href='#'>
                    <img src={logo} alt=''/>
                </a>
            </div>
            <nav className="footer__nav">
                <ul id="footer-list" className="footer__nav-list">
                    {itemsList.map((itemText) => (
                        <li key={itemText}>
                            <a href="#">{itemText}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default WebFooter;