import React from 'react'

// partials components
import Slide from '../partials/Slide';

import light from '../../images/light.png'
import medium from '../../images/medium.png'
import heavy from '../../images/heavy.png'

const FleetInputs = () => {

    const slide1Title = 'Heavy Commercial Vehicles'
    const slide2Title = 'Medium Heavy Commercial Vehicles'
    const slide3Title = 'Light Commercial Vehicles'

    return (
        <section className="slides">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-xl-4 ">
                    <Slide slideTitle={slide1Title} slideImage={heavy}/>
                </div>
                <div className="col col-sm-12 col-md-12 col-xl-4 ">
                    <Slide slideTitle={slide2Title} slideImage={medium}/>
                </div>
                <div className="col col-sm-12 col-md-12 col-xl-4 ">
                    <Slide slideTitle={slide3Title} slideImage={light}/>
                </div>
            </div>
        </section>
    )
}

export default FleetInputs
