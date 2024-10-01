import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import BottomSectionPanel from './BottomSectionPanel.jsx'
import GalleryElement from './GalleryElement.jsx'
import './styles/SectionElementSL.css'
import {generateText} from '../../utils/contentTools.jsx'

const SectionElement = ({
    sectionDataValue,
    currentPageLocation, 
    setCurrentPageLocation,
    sectionHoverSoundEnter,
    sectionHoverSoundExit,
    btnHoverSound,
    btnClickSound,
    handleItemInteractionSound}) => {

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);
    const hasGalleryBool = sectionDataValue.hasGallery === 'true';

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.2, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        setCurrentStatusBool(sectionDataValue.sectionMarker == currentPageLocation);

    }, [currentPageLocation])

    useEffect(() => {

        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivateSectionMinor(true);
            }, 100);

        }else{
            setActivateSectionMinor(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);

    const generateGallery = () => {
        const currentBoolStr = currentStatusBool.toString();
        if(hasGalleryBool){
            return(
                <GalleryElement 
                sectionMarker={sectionDataValue.sectionMarker} 
                galleryType={sectionDataValue.galleryType} 
                galleryImages={sectionDataValue.galleryImages} 
                currentStatusBool={currentStatusBool} 
                btnHoverSound={btnHoverSound}
                btnClickSound={btnClickSound}
                handleItemInteractionSound={handleItemInteractionSound} />
            )
        }
    }

    const galleryValue = generateGallery;

    return (
        <>
            <div id={sectionDataValue.sectionMarker} ref={ref} className={`full-section-config floating ${inView ? 'inView-mode' : 'outView-mode'}`}>
                <div 
                    id={`${sectionDataValue.sectionMarker} + _Mkr`} 
                    ref={ref} 
                    className={`section-minor ${activateSectionMinor ? 'active-section-minor' : ''}`}
                    onMouseEnter={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter);
                    }}
                    onMouseLeave={() => {
                        handleItemInteractionSound(sectionHoverSoundExit);
                    }}
                >
                    <div className="section-hdr">
                        <div className="section-title-SL"><h3>{sectionDataValue.sectionTitle}</h3></div>
                        <div className="section-position-value">{sectionDataValue.sectionTitle}</div>
                        <div className="section-subtitle">{sectionDataValue.sectionSubtitle}</div>
                    </div>
                    <div className="section-nfo  nfo-scroll">
                        {generateText(sectionDataValue.sectionNfo,'sectionNfo', sectionDataValue.sectionMarker)}
                    </div>
                    {generateGallery()}
                </div>
                <BottomSectionPanel currentStatusBool={currentStatusBool}/>
            </div>
        </>
      )
    }
    
    export default SectionElement