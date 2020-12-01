import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect } from "react";
import gsap from 'gsap';
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {

    const fadeInFromLeft = () => {
        gsap.to('.about-animation', {
            scrollTrigger: {
                trigger: '.about-animation',
                // markers: true,
                scrub: 1,
                start: 'top 90%',
                toggleActions: 'restart none reverse none'
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

    return (
        <section className="About light" ref={ref}>
        <h1 className='about-animation'>About</h1>
        <div className="container">
            <p className='about-animation'>
                My first touch with programing was in 2018 when i took a C++ course as
                my first programing language.
            </p>
            <p className='about-animation'>
                I learned the basic stuff (loops, conditions and more...) in that
                course.
            </p>
            <p className='about-animation'>
                From there i was very curious to gain more knowledge about programing
                so i decided to take me to the next level by registering to a boot
                camp.
            </p>
            <p className='about-animation'>
                I completed the boot camp and now i have the ability to build web
                sites from scratch.
            </p>
            <p className='about-animation'>
                I'm very dedicated to my work, highly motivated to gain further knowledge in the field,
                with excellent human relations,
                and I'm sure that any company that will hire me will highly benefit from me.
            </p>
            <p className='about-animation'>
                Today I'm focused on finding my first job and expanding my knowledge,
                and of course building some projects!!! :)
            </p>
        </div>
        </section>
    );
});

export default About;