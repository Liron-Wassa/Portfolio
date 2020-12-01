import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Header.css';
import logoImage from '../../assets/logo.png';

const Header = ({ coverTopImageRef, projectRef, aboutRef, skillsRef, contactRef, menuColor }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    let menuButton = <FontAwesomeIcon icon={faBars} />;
    let ulAttachedCSSClasses = 'flex';

    if(menuIsOpen) {
        ulAttachedCSSClasses = 'flex active';
        menuButton = <FontAwesomeIcon icon={faTimes} />;
    };

    const handleScroll = (pageSection) => {
        const positionFromTopPage = pageSection.current.offsetTop - 60;
        window.scrollTo({top: positionFromTopPage, behavior: 'smooth'});
    };

    return (
        <header className={`Header ${menuColor}`}>
            <div className='container'>
                <nav>
                    <img src={logoImage} alt='logo' onClick={() => handleScroll(coverTopImageRef)} />
                    <div className='btn' onClick={() => setMenuIsOpen(menuIsToggle => !menuIsToggle)}>
                        {menuButton}
                    </div>
                    <ul className={ulAttachedCSSClasses}>
                        <li onClick={() => {handleScroll(projectRef); setMenuIsOpen(false)}}>Project</li>
                        <li onClick={() => {handleScroll(aboutRef); setMenuIsOpen(false)}}>About</li>
                        <li onClick={() => {handleScroll(skillsRef); setMenuIsOpen(false)}}>Skills</li>
                        <li onClick={() => {handleScroll(contactRef); setMenuIsOpen(false)}}>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;