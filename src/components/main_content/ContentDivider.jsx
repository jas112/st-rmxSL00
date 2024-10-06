import React from 'react'
import './styles/ContentDivider.css'

const ContentDivider = ({
    reverseThis
}) => {
    const reverseThisBool = (reverseThis == 'true');
    // console.log(`reverseThis = ${reverseThis}`);
    // console.log(`reverseThisBool = ${reverseThisBool}`);
    
  return (
    <div className={`content-divider ${reverseThisBool ? 'dir-rt': 'dir-lft'}`}>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip sm-divider-pip">
            <div className="divider-filament"></div>
        </div>
        <div className="divider-pip lrg-divider-pip">
            <div className="divider-filament-lg"></div>
        </div>
    </div>
  )
}

export default ContentDivider