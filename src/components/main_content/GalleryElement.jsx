import React, {useState, useEffect} from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({
    sectionMarker, 
    galleryType, 
    galleryImages, 
    currentStatusBool,
    btnHoverSound,
    btnClickSound,
    handleItemInteractionSound}) => {

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});
    }, [])
    
    const determineGalleryClass = () => {
        if(galleryType == 'hero'){
            return ('gallery-type-hero');
        }else{
            return ('gallery-type-dev-dsn-work');
        }
    }

    const galleryClass = determineGalleryClass();

    const generateGalleryItems = () => {
        var gallerySet = [];
        if(galleryType == 'hero'){
            gallerySet.push(galleryImages[1]);
        }else{
            gallerySet = galleryImages
        }

        return(
            gallerySet.map((gItem, gItem_idx) => (
                <a 
                    key={`${sectionMarker}` + '-' + gItem_idx} 
                    data-fancybox={sectionMarker} 
                    data-caption={gItem.galleryItemDescription}
                    data-type={gItem.galleryItemType}
                    href={gItem.galleryItemPath}
                >
                    <GalleryItemTypeA 
                        galleryItem={gItem} 
                        btnHoverSound={btnHoverSound}
                        btnClickSound={btnClickSound}
                        handleItemInteractionSound={handleItemInteractionSound}
                    />
                </a>
            )) 
        )
    }

  return (
    <div className={galleryClass}>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-spacer-segment'></div>
            <div className='gallery-element-border-pulse-segment'></div>
        </div>
        <div className={`gallery-element-console ${currentStatusBool ? 'active-gallery-element-console' : ''}`}>

            {generateGalleryItems()}

        </div>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-pulse-segment'></div>
            <div className='gallery-element-border-spacer-segment'></div>
        </div>
    </div>
  )
}

export default GalleryElement