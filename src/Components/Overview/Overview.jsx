import React from 'react'
import './Overview.css'
import frame from '../../images/frame.svg'
import veg from '../../images/veg.svg'


const Overview = () => {
  return (
    <div className='overview-container'>
        <div className="overview-header">
            <h4>GREEN LIVING</h4>
            <h1>Sustainable Homes</h1>
        </div>
        <div className="overview-body">
            <div className="body-left">
                <div className="left-header">
                    <div className="frame">
                        <img src={frame} alt="Frame" />
                    </div>
                    <h2>For healthier living environment</h2>
                </div>
                <div className="left-content">
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <h4>Eco friendly practices</h4>
                    </div>
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <h4>Green spaces</h4>
                    </div>
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <h4>Landscaping</h4>
                    </div>
                    <div className="content cont1">
                        <div className="veg">
                            <img src={veg} alt="Veg" />
                        </div>
                        <h4>Sustainable design</h4>
                    </div>
                </div>
            </div>
            <div className="body-right"></div>
        </div>
      
    </div>
  )
}

export default Overview
