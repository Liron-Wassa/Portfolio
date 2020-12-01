import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect } from 'react';
import gsap from 'gsap';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = forwardRef((props, ref) => {

    const fadeInFromRight = () => {
        gsap.to('.footer-animation', {
            scrollTrigger: {
                trigger: '.footer-animation',
                // markers: true,
                start: 'top 90%',
                end: 'bottom 100%',
                toggleActions: 'restart none reverse none'
            },
            duration: 1,
            opacity: 1,
            x: 0,
            startAt: {x: 20, opacity: 0},
            ease: "power4.out",
            stagger: {
                amount: 0.5
            }
        });
    };

    useEffect(() => {
        fadeInFromRight();
    }, []);

    return (
        <footer className='Footer' ref={ref}>  
            <div className='container'>
                <ul className='social-network flex'>
                    <li className='footer-animation'>
                        <a href='https://www.linkedin.com/in/liron-wassa-583942194/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className='footer-animation'>
                        <a href='tel:+972503627873'>
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </li>
                    <li className='footer-animation'>
                        <a href='mailto:lironwassa@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
            <p className='footer-animation'>Copyright © 2020 Liron Wassa. All rights reserved.</p>
        </footer>
    );
});

export default Footer;