import { forwardRef, useState, useEffect } from 'react';
import BackGround1 from '../../assets/PLJI1839.JPG';
import BackGround2 from '../../assets/PZVJ4930.JPG';
import BackGround3 from '../../assets/IMG_9906.JPG';
import BackGround4 from '../../assets/IMG_9910.JPG';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './CoverTopImage.css';

gsap.registerPlugin(ScrollTrigger);

const CoverTopImage = forwardRef(({ changeTheme }, ref) => {

    const [index, setIndex] = useState(0);

    const fadeInFromLeft = () => {
        gsap.to('.coverTopImage-animation', {
            scrollTrigger: {
                trigger: '.coverTopImage-animation',
                // markers: true,
                toggleActions: 'restart none none none'
            },
            duration: 1,
            opacity: 1,
            x: 0,
            startAt: {x: -100, opacity: 0},
            ease: "power4.out",
            stagger: {
                amount: 0.5
            }
        });
    };

    useEffect(() => {
        fadeInFromLeft();
    }, []);

    const images = [
        BackGround1,
        BackGround2,
        BackGround3,
        BackGround4
    ];

    const nextSlide = () => {
        const newIndex = (index + 1) % images.length;
        setIndex(newIndex);
    };

    const previousSlide = () => {
        const newIndex = (index - 1 + images.length) % images.length;
        setIndex(newIndex);
    };

    return (
        <section className='CoverTopImage light' style={{backgroundImage: `url(${images[index]})`}} ref={ref}>
            <div className='container flex'>
                <div className='text-box flex coverTopImage-animation'>
                    <h1>Hey, I'm <span className='name'>Liron Wassa</span></h1>
                    <p>I'm a Full-Stack web developer, please have a seat and scroll down before you click on the links.</p>
                    <div className='links flex'>
                        <a href='https://drive.google.com/file/d/126dfh1L9_NUklnu2tQ4JhS-aqwY7wlHW/view?usp=sharing' target='_blank' rel="noreferrer">
                            Resume
                        </a>
                        <a href='https://github.com/Liron-Wassa' target='_blank' rel="noreferrer">
                            Github
                        </a>
                    </div>
                </div>
            </div>
            <div className='svg-shape' style={{height: "150px", overflow: "hidden"}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}/>
                </svg>
            </div>
            <div className='arrows flex coverTopImage-animation'>
                <span onClick={previousSlide}>&lt;</span>
                <span onClick={nextSlide}>&gt;</span>
            </div>
            <div className='theme coverTopImage-animation'>
                <h3>Change color theme</h3>
                <div className='colors flex'>
                    <span onClick={() => changeTheme('dark')} />
                    <span onClick={() => changeTheme('green')} />
                    <span onClick={() => changeTheme('purple')} />
                </div>
            </div>
        </section>
    );
});

export default CoverTopImage;