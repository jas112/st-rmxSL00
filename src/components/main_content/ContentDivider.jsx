import React from 'react'
import './styles/ContentDivider.css'

const ContentDivider = ({
    reverseThis
}) => {
    const reverseThisBool = (reverseThis == 'true');
    console.log(`reverseThis = ${reverseThis}`);
    console.log(`reverseThisBool = ${reverseThisBool}`);
    
  return (
    <div className={`content-divider ${reverseThisBool ? 'dir-rt': 'dir-lft'}`}>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="sm-divider-pip"></div>
        <div className="lrg-divider-pip"></div>
    </div>
  )
}

export default ContentDivider