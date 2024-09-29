import React, { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sectionsData from './data_resources/sections.js';
import scrollTransforms from './data_resources/scrollTransforms.js';
import NavBar from './components/navBar/NavBar';
import BackgroundFrame from './components/parallax_frames/BackgroundFrame.jsx';
import SectionElement from './components/main_content/SectionElement.jsx';

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
      <div>
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
      </p>

      <div className="content-container">
        {Object.keys(sectionRefs).slice(0, 5).map((sectionKey,idx) =>(
          <React.Fragment key={idx}>
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
          </React.Fragment>
        ))}
      </div>
      <BackgroundFrame currentScroll={scrollPositionY}/>
    </>
  )
}

export default App
