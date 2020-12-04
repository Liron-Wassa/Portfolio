import { faCss3Alt, faEnvira, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDesktop, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect } from 'react';
import gsap from 'gsap';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = forwardRef((props, ref) => {

    const fadeInFromBottom = () => {
        gsap.to('.skills-animation', {
            scrollTrigger: {
                trigger: '.skills-animation',
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
        <section className='Skills dark' ref={ref}>
            <h1 className='skills-animation'>Skills</h1>
            <div className='container grid'>
                <div className='server flex skills-animation'>
                    <FontAwesomeIcon icon={faServer} />
                    <h2>Server</h2>
                    <div className='icons-box flex'>
                        <div className='icon flex'> 
                            <p>node<span>JS</span></p>
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                        <div className='icon flex'>
                            <p>express<span>JS</span></p>
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                    </div>
                </div>
                <div className='database flex skills-animation'>
                    <FontAwesomeIcon icon={faDatabase} />
                    <h2>Database</h2>
                    <div className='icons-box flex'>
                        <div className='icon flex'>
                            <p>mongo<span>DB</span></p>
                            <FontAwesomeIcon icon={faEnvira} />
                        </div>
                    </div>
                </div>
                <div className='frontend flex skills-animation'>
                    <FontAwesomeIcon icon={faDesktop} />
                    <h2>Front End</h2>
                    <div className='icons-box flex'>
                        <div className='icon flex'>   
                            <p>HTML<span>5</span></p>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='icon flex'>
                            <p>CSS<span>3</span></p>
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                        <div className='icon flex'>
                            <p>Java<span>Script</span></p>
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                        <div className='icon flex'>
                            <p>React<span>JS</span></p>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;