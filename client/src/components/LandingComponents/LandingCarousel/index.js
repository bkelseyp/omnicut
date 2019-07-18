import React from 'react';
import './style.css';

const LandingCarousel = props => {
    console.log(props);
    return (
        <>

        <div id="carouselExampleFade" className="carousel slide carousel-fade"  data-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item ">
                    <img className="d-block w-100" src='/images/City-03.jpg' alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle'>Door to Door Service</h5>
                        <p id='carSubText'>Making your life easier with door to door service. You pick the location anywhere, anytime.</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src='/images/Barber-03.jpg' alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle'>Trim The Wait Times</h5>
                        <p id='carSubText'>Get you hair cut on your timeframe. No more waiting and no more double booking.</p>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img className="d-block w-100" src='/images/Barber-09.jpg' src1={props.SliderImage3} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle'>Sharpen Your Skills</h5>
                        <p id='carSubText' className=''>Are you a stylist wanting to create your own schedule? Book and build your clientele with OmniCut.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
        </div>
        </>
    )
}

export default LandingCarousel;



 

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// var LandingCarousel = React.createClass({
