import { useState, Fragment, useEffect, useRef, useMemo } from "react";
import CoverTopImage from "./components/CoverTopImage/CoverTopImage";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Main from "./components/Main/Main";

const themes = {
  dark: [
    {type: '--primary', hex: '#272727'},
    {type: '--secondary', hex: '#E77728'},
    {type: '--light-color', hex: '#333'}
  ],
  purple: [
    {type: '--primary', hex: '#414066'},
    {type: '--secondary', hex: '#E9B44C'},
    {type: '--light-color', hex: '#4e497a'}
  ],
  green: [
    {type: '--primary', hex: '#31493C'},
    {type: '--secondary', hex: '#F2E29F'},
    {type: '--light-color', hex: '#3b5748'}
  ]
};

const App = () => {

  const [menuColor, setMenuColor] = useState('dark');

  const coverTopImageRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  const onIntersection = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const currentSectionColorClass = entry.target.className.split(' ')[1];
        if(currentSectionColorClass === 'dark') setMenuColor('light');
        else setMenuColor('dark');
      };
    });
  };

  const options = useMemo(() => ({
    root: null,
    rootMargin: `-65px 0px -${window.innerHeight - 65}px 0px`,
    thresHold: 1
  }), []);
  
  const observer = useMemo(() => new IntersectionObserver(onIntersection, options), [options]);

  useEffect(() => {
    const initialTheme = () => {
      const storedTheme = JSON.parse(localStorage.getItem('theme'));
      if(storedTheme && themes[storedTheme]) {
        changeTheme(storedTheme);
      }
      else {
        for(const color of themes.dark) {
          document.documentElement.style.setProperty(color.type, color.hex);
        };
      };
    };
    initialTheme();
    observer.observe(coverTopImageRef.current);
    observer.observe(projectRef.current);
    observer.observe(aboutRef.current);
    observer.observe(skillsRef.current);
  }, [observer]);

  const changeTheme = (newTheme) => {
    const storedTheme = JSON.parse(localStorage.getItem('theme'));
    for(const color of themes[newTheme]) {
      document.documentElement.style.setProperty(color.type, color.hex);
    };
    if(storedTheme !== newTheme) {
      localStorage.setItem('theme', JSON.stringify(newTheme));
    };
  };

  return (
    <Fragment>
      <Header
        coverTopImageRef={coverTopImageRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        menuColor={menuColor}
      />
      <Main>
        <CoverTopImage changeTheme={changeTheme} ref={coverTopImageRef} />
        <Projects ref={projectRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
      </Main>
      <Footer ref={contactRef} />
    </Fragment>
  );
}

export default App;