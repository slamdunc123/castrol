import React, { Component } from 'react'

import Sliders from './Sliders'

class Slide extends Component {
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            slider: true
        }
    }
    

    handleClick = (e) => {
        e.preventDefault();
        console.log('link clicked')
        this.setState({
            slider: false
        })
        console.log(this.state.slider)
    }

    render(){
        if(this.state.slider){
            return (
                <div className="card mx-auto">
                    <h5 className="card-header text-white text-uppercase">{this.props.slideTitle}</h5>
                    <div className="card-body">
                    <img src={this.props.slideImage} alt=""/>

                        <a href="/" className="" onClick={this.handleClick}>Click to input fleet information</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card mx-auto">
                    <h5 className="card-header text-white text-uppercase">{this.props.slideTitle}</h5>
                    <div className="card-body">
                    <Sliders />
                    </div>
                </div>
            )
        }
    }
}

export default Slide
