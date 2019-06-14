import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons'


class Sliders extends Component {
    state = {
        sliderOne: 50,
        sliderTwo: 50,
        sliderThree: 150000,
        sliderFour: 1250,
        sliderFive: 150,
        sliderSix: 150
    }

    handleOnChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let sliderOne = parseInt(this.state.sliderOne, 10);
        let sliderTwo = parseInt(this.state.sliderTwo, 10);
        let sliderThree = parseInt(this.state.sliderThree, 10);
        let sliderTotal = sliderOne + sliderTwo + sliderThree;
        console.log(sliderOne, sliderTwo, sliderThree, sliderTotal)

        return (
            <div className="container">
                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderOne">Litres per 100km</label>
                            <input type="range" min="1" max="100" id="range-one" name="sliderOne" value={this.state.sliderOne} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-one">{this.state.sliderOne}&nbsp; L/100km</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderTwo">Average Sump Size</label>
                            <input type="range" min="1" max="100" id="range-two" name="sliderTwo" value={this.state.sliderTwo} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-two">{this.state.sliderTwo}&nbsp; L</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderThree">Annual Mileage</label>
                            <input type="range" min="1" max="300000" id="range-three" name="sliderThree" value={this.state.sliderThree} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-three">{this.state.sliderThree}&nbsp; km</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderFour">#Vehicles in Fleet</label>
                            <input type="range" min="1" max="2500" id="range-four" name="sliderFour" value={this.state.sliderFour} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-four">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            &nbsp;{this.state.sliderFour}</div>
                        </div>
                    </div>
                </div>
            <hr/>
                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderFive">Current Engine Oil Cost 15-40W</label>
                            <input type="range" min="1" max="300" id="range-five" name="sliderFive" value={this.state.sliderFive} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-five">
                            <FontAwesomeIcon icon={faRupeeSign} />
                            &nbsp;{this.state.sliderFive}</div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col col-8">
                        <div className="slidecontainer">
                            <label htmlFor="sliderSix">Castrol Version RX Fuel Saver 10W-40 Cost</label>
                            <input type="range" min="1" max="300" id="range-six" name="sliderSix" value={this.state.sliderSix} onChange={this.handleOnChange} className="slider" /> &nbsp;
                        </div>
                    </div>
                    <div className="col col-4">
                        <div className="slidecontainer-text">
                            <div id="slider-six">
                            <FontAwesomeIcon icon={faRupeeSign} />
                            &nbsp;{this.state.sliderSix}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sliders

