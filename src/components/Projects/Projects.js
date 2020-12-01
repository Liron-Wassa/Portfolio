import chatroomfront from '../../assets/chatroomfront.png';
import chatroomback from '../../assets/chatroomback.png';
import carpostfront from '../../assets/carpostfront.png';
import carpostback from '../../assets/carpostback.png';
import flappyfront from '../../assets/flappyfront.png';
import budgetfront from '../../assets/budgetfront.png';
import flappyback from '../../assets/flappyback.png';
import snakefront from '../../assets/snakefront.png';
import budgetback from '../../assets/budgetback.png';
import bookfront from '../../assets/bookfront.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import snakeback from '../../assets/snakeback.png';
import bookback from '../../assets/bookback.png';
import { forwardRef, useEffect } from 'react';
import gsap from 'gsap';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef((props, ref) => {

    const fadeInFromBottom = () => {
        gsap.to('.projects-animation', {
            scrollTrigger: {
                trigger: '.projects-animation',
                // markers: true,
                scrub: 1,
                start: 'top 90%',
                toggleActions: 'restart none reverse none'
            },
            duration: 1,
            opacity: 1,
            y: 0,
            startAt: {y: 100, opacity: 0},
            ease: "power4.out",
            stagger: {
                amount: 0.5
            }
        });
    };

    useEffect(() => {
        fadeInFromBottom();
    }, []);

    return (
        <section className='Projects dark' ref={ref}>
            <h1 className='projects-animation'>My Projects</h1>
            <div className='container flex'>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={chatroomfront} alt='project' />
                        </div>
                        <h2>Chat Room</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={chatroomback} alt='project' />
                        </div>
                        <a href='https://wassa-style-chat.herokuapp.com/' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Liron-Wassa/ChatRoom' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={carpostfront} alt='project' />
                        </div>
                        <h2>Car Posts</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={carpostback} alt='project' />
                        </div>
                        <a href='https://car-posts.herokuapp.com/' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Liron-Wassa/CarPosts' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={flappyfront} alt='project' />
                        </div>
                        <h2>Flappy Bird</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={flappyback} alt='project' />
                        </div>
                        <a href='https://avshalom-mogos.github.io/flappyBird-js/' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Avshalom-Mogos/flappyBird-js' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={bookfront} alt='project' />
                        </div>
                        <h2>Book Collection</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={bookback} alt='project' />
                        </div>
                        <a href='https://liron-wassa.github.io/Book-collection/#/search' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Liron-Wassa/Book-collection' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={snakefront} alt='project' />
                        </div>
                        <h2>Snake</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={snakeback} alt='project' />
                        </div>
                        <a href='https://liron-wassa.github.io/snake/' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Liron-Wassa/snake' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
                <div className='project-box projects-animation'>
                    <div className='front-face'>
                        <div className='image-box'>
                            <img src={budgetfront} alt='project' />
                        </div>
                        <h2>Budget</h2>
                        <p>Hover on me</p>
                    </div>
                    <div className='back-face'>
                        <div className='image-box'>
                            <img src={budgetback} alt='project' />
                        </div>
                        <a href='https://liron-wassa.github.io/Budget/' target='__blank' rel="noreferrer">
                            Go to the site
                        </a>
                        <a href='https://github.com/Liron-Wassa/Budget' target='__blank' rel="noreferrer">
                            Go to the code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;