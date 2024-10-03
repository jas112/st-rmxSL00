import React, { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sectionsData from './data_resources/sections.js';
import scrollTransforms from './data_resources/scrollTransforms.js';
import NavBar from './components/navBar/NavBar';
import BackgroundFrame from './components/parallax_frames/BackgroundFrame.jsx';
import HDRParallaxFrames from './components/parallax_frames/HDRParallaxFrames.jsx';
import SectionElement from './components/main_content/SectionElement.jsx';
import SpacerElement from './components/main_content/SpacerElement.jsx';
import TerminusSection from './components/main_content/TerminusSection.jsx';
import FTR_Element from './components/main_content/FTR_Element.jsx';
import ContentDivider from './components/main_content/ContentDivider.jsx';

import spacetrippAvatar from './assets/images/hdrParallax_imgs/ST_tripp_figure_remix_studio_rs_1Awb_b6cSL.png'

import sectionHoverSoundRef from '/src/assets/audio/286926-TheLibrarybyMTC-UI-Computer-250.wav'
import navMenuClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'
import navPntClickSoundRef from '/src/assets/audio/52460-SCIENCE_FICTION_DOOR_WHOOSH_OPEN_SHORT_01.wav'
import btnHoverSoundRef from '/src/assets/audio/51574-SCIENCE_FICTION_MULTIMEDIA_TECHNOLOGY_COMPUTER_BLIP_01.wav'
import btnClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPositionY, setScrollPositionY] = useState(0);

  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');

  const [sfxActive, setSfxActive] = useState(false);
  const [musicActive, setMusicActive] = useState(false);

  const [parallaxRemix, setParallaxRemix] = useState(true);

  const [currentPageLocation, setCurrentPageLocation] = useState('start');

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    webDevelopment: useRef(null),
    emailDevelopment: useRef(null),
    graphicDesign: useRef(null),
    visualDesign: useRef(null),
    terminus: useRef(null)
  };

  const getSectionUpperBound = (sectionValue) => {
    return sectionRefs[sectionValue].current.offsetTop - 0;
  }

  const getSectionLowerBound = (sectionValue) => {
    return sectionRefs[sectionValue].current.offsetTop + sectionRefs[sectionValue].current.offsetHeight;
  }

  useEffect(() => {

    const trackScrollandSetPageLocation = () => {
      
      const newScrollPositionValue = window.scrollY;
      setScrollPositionY(newScrollPositionValue);

      const aboutSectionUpperBoundY = getSectionUpperBound('about');
      const aboutSectionLowerBoundY = getSectionLowerBound('about');
      const webDevSectionUpperBoundY = getSectionUpperBound('webDevelopment');
      const webDevSectionLowerBoundY = getSectionLowerBound('webDevelopment');
      const emailDevSectionUpperBoundY = getSectionUpperBound('emailDevelopment');
      const emailDevSectionLowerBoundY = getSectionLowerBound('emailDevelopment');
      const grfxDsnSectionUpperBoundY = getSectionUpperBound('graphicDesign');
      const grfxDsnSectionLowerBoundY = getSectionLowerBound('graphicDesign');
      const visDsnSectionUpperBoundY = getSectionUpperBound('visualDesign');
      const visDsnSectionLowerBoundY = getSectionLowerBound('visualDesign');
      const terminusSectionUpperBoundY = getSectionUpperBound('terminus');
      const terminusSectionLowerBoundY = getSectionLowerBound('terminus');

      // console.log(`about - ${aboutSectionUpperBoundY} | ${aboutSectionLowerBoundY}`);
      // console.log(`webDev - ${webDevSectionUpperBoundY} | ${webDevSectionLowerBoundY}`);
      // console.log(`emailDev - ${emailDevSectionUpperBoundY} | ${emailDevSectionLowerBoundY}`);
      // console.log(`grfxDsn - ${grfxDsnSectionUpperBoundY} | ${grfxDsnSectionUpperBoundY}`);
      // console.log(`visDsn - ${visDsnSectionUpperBoundY} | ${visDsnSectionLowerBoundY}`);
      // console.log(`terminus - ${terminusSectionUpperBoundY} | ${terminusSectionLowerBoundY}`);

      const endTop = bottomRef.current.offsetTop;

      if (newScrollPositionValue <= (aboutSectionUpperBoundY - 100)) {
        setCurrentPageLocation('start');
      } else if (newScrollPositionValue >= aboutSectionUpperBoundY && newScrollPositionValue <= aboutSectionLowerBoundY) {
        setCurrentPageLocation('about');
      } else if (newScrollPositionValue >= webDevSectionUpperBoundY && newScrollPositionValue <= webDevSectionLowerBoundY) {
        setCurrentPageLocation('webDevelopment');
      } else if (newScrollPositionValue >= emailDevSectionUpperBoundY && newScrollPositionValue <= emailDevSectionLowerBoundY) {
        setCurrentPageLocation('emailDevelopment');
      } else if (newScrollPositionValue >= grfxDsnSectionUpperBoundY && newScrollPositionValue <= grfxDsnSectionLowerBoundY) {
        setCurrentPageLocation('graphicDesign');
      } else if (newScrollPositionValue >= visDsnSectionUpperBoundY && newScrollPositionValue <= visDsnSectionLowerBoundY) {
        setCurrentPageLocation('visualDesign');
      } else if (newScrollPositionValue >= terminusSectionUpperBoundY && newScrollPositionValue <= terminusSectionLowerBoundY) {
        setCurrentPageLocation('terminus');
      } else if (newScrollPositionValue >= (terminusSectionLowerBoundY + 10)) {
        setCurrentPageLocation('end');
      }

    };

    window.addEventListener('scroll', trackScrollandSetPageLocation);

    const trackTime = setInterval(() => {
      const dateValue = new Date();
      setDateString(`${dateValue.getMonth() + 1}/${dateValue.getDate()}/${dateValue. getFullYear()}`);
      setTimeString(`${dateValue.getHours() < 10 ? '0' : ''}${dateValue.getHours()}.${dateValue.getMinutes() < 10 ? '0' : ''}${dateValue.getMinutes()}.${dateValue.getSeconds() < 10 ? '0' : ''}${dateValue.getSeconds()}`);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', trackScrollandSetPageLocation);
      clearInterval(trackTime);
    };

  }, [])

  const determineScrollTransform = (targetProperty) => {
    const terminusSectionUpperBoundY = getSectionUpperBound('terminus');
    const terminusSectionLowerBoundY = getSectionLowerBound('terminus');
    if(scrollPositionY >= 0 && scrollPositionY < 60) return scrollTransforms[targetProperty].phase_0_transform;
    if(scrollPositionY > 60 && scrollPositionY < terminusSectionUpperBoundY) return scrollTransforms[targetProperty].phase_1_transform;
    if(scrollPositionY > terminusSectionUpperBoundY && scrollPositionY < terminusSectionLowerBoundY + 10) return scrollTransforms[targetProperty].phase_2_transform;
    if(scrollPositionY > terminusSectionLowerBoundY + 10 ) return scrollTransforms[targetProperty].phase_3_transform;
  }

  useEffect(() => {
    // console.log(`scroll value - ${scrollPositionY} | pageLocation - ${currentPageLocation}`);
    document.documentElement.style.setProperty('--scrollbar-track-bgColor', determineScrollTransform('sBarTrackBGolor'));
    document.documentElement.style.setProperty('--scrollbar-thumb-bgColor', determineScrollTransform('sBarThumbBGColor'));
    document.documentElement.style.setProperty('--scrollbar-thumb-border', determineScrollTransform('sBarThumbBorder'));
  }, [scrollPositionY]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  const scrollToSection = (section) => {
    if(sectionRefs[section] && sectionRefs[section].current){

      const sectionTop = sectionRefs[section].current.offsetTop;
      const sectionHeight = sectionRefs[section].current.offsetHeight;
      const windowHeight = window.innerHeight;
      const offset = sectionTop;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });

    }
  };

  const sectionHoverSoundEnter = new Audio(sectionHoverSoundRef);
  const sectionHoverSoundExit = new Audio(sectionHoverSoundRef);
  const navMenuClickSound = new Audio(navMenuClickSoundRef);
  const navPntClickSound = new Audio(navPntClickSoundRef)
  const btnHoverSound = new Audio(btnHoverSoundRef);
  const btnClickSound = new Audio(btnClickSoundRef);

  sectionHoverSoundEnter.volume = 0.81;
  sectionHoverSoundExit.volume = 0.81;
  navMenuClickSound.volume = 0.11;
  navPntClickSound.volume = 0.11;
  btnHoverSound.volume = 0.21;
  btnClickSound.volume = 0.11;

  sectionHoverSoundExit.playbackRate = 1.5;
  navPntClickSound.playbackRate = .5;
  btnHoverSound.playbackRate = 1;
  btnClickSound.playbackRate = 1;

  const handleItemInteractionSound = (sound) => {
    if (sfxActive) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ST_RMXSL00</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <NavBar 
        currentScroll={scrollPositionY} 
        currentDate={dateString}
        currentTime={timeString} 
        currentPageLocation={currentPageLocation} 
        setCurrentPageLocation={setCurrentPageLocation}
        scrollToTop={scrollToTop} 
        scrollToBottom={scrollToBottom} 
        scrollToSection={scrollToSection} 
        screenWidth={windowWidth}
        sfxActive={sfxActive}
        setSfxActive={setSfxActive}
        musicActive={musicActive}
        setMusicActive={setMusicActive}
        sectionHoverSoundEnter={sectionHoverSoundEnter}
        sectionHoverSoundExit={sectionHoverSoundExit}
        navMenuClickSound={navMenuClickSound}
        navPntClickSound={navPntClickSound}
        btnHoverSound={btnHoverSound}
        btnClickSound={btnClickSound}
        handleItemInteractionSound={handleItemInteractionSound}
        parallaxRemix={parallaxRemix} 
        setParallaxRemix={setParallaxRemix}
      /> 
      {/* <SpacerElement factor={1}/> */}
      <HDRParallaxFrames parallaxRemix={parallaxRemix}/>
      <div ref={topRef}></div>
      <div className="content-container">
        <div className="main-content-avatar-frame">
          <img className='main-content-avatar-image' src={spacetrippAvatar} alt="Avatar Image of Spacetripp." />
          <div className="main-content-avatar-pedastal"></div>
        </div>
      <div className="main-content">
        {Object.keys(sectionRefs).slice(0, 5).map((sectionKey,idx) =>(
          <React.Fragment key={idx}>
            {idx === 0 ? '' : <ContentDivider reverseThis={'true'}/>}
            {/* <ContentDivider directionValue={'dir-rt'}/> */}
            <div className='page-nav-ref section-nav-frame' ref={sectionRefs[sectionKey]}>
              <SectionElement 
                sectionDataValue={sectionsData[sectionKey]} 
                currentPageLocation={currentPageLocation}
                setCurrentPageLocation={setCurrentPageLocation}
                sectionHoverSoundEnter={sectionHoverSoundEnter}
                sectionHoverSoundExit={sectionHoverSoundExit}
                btnHoverSound={btnHoverSound}
                btnClickSound={btnClickSound}
                handleItemInteractionSound={handleItemInteractionSound}
              />
            </div>
            <SpacerElement factor={'05'}/>
          </React.Fragment>
        ))}
        <ContentDivider reverseThis={'false'}/>
        {/* <div className="content-divider"></div> */}
        <div className='page-nav-ref terminus-nav' ref={sectionRefs.terminus}>
          <TerminusSection 
            sectionDataValue={sectionsData.terminus}
            currentPageLocation={currentPageLocation}
            setCurrentPageLocation={setCurrentPageLocation}
            parallaxRemix={parallaxRemix}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
      </div>
      </div>
      <div className='ftr-element'>
        <SpacerElement factor={3}/> 
        {/* <FTR_Element parallaxRemix={parallaxRemix} currentPageLocation={currentPageLocation} /> */}
      </div>
      <BackgroundFrame currentScroll={scrollPositionY}/>
      <div className='page-nav-ref' ref={bottomRef}></div>
    </>
  )
}

export default App
