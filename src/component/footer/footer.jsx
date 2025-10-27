import './footer.scss'
import logo from '../../assets/logo.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconPinterest from '../../assets/icon-pinterest.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

const socialIcons = [
    { id: 'facebook', href: 'https://www.facebook.com/', icon: iconFacebook, alt: 'Facebook' },
    { id: 'twitter', href: 'https://twitter.com/', icon: iconTwitter, alt: 'Twitter' },
    { id: 'pinterest', href: 'https://www.pinterest.com/', icon: iconPinterest, alt: 'Pinterest' },
    { id: 'instagram', href: 'https://www.instagram.com/', icon: iconInstagram, alt: 'Instagram' },
];

const WebFooter = ({ itemsList }) => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <a href='#'>
                    <img src={logo} alt=''/>
                </a>
            </div>
            <nav className="footer__nav" aria-label="Footer">
                <ul id="footer-list" className="footer__nav-list">
                    {itemsList.map((itemText) => (
                        <li key={itemText}>
                            <a href="#">{itemText}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="footer__icon-list">
                {socialIcons.map((social) => (
                    <li key={social.id}>
                        <a href={social.href} aria-label={social.alt}>
                            <img src={social.icon} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
            <p className='footer__copyright'>© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default WebFooter;