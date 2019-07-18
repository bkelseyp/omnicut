import React from 'react';
import './style.css';
import LandingCarousel from '../LandingCarousel';

class LandHeroWrapper extends React.Component {
    render() {
        return (
            <>
                <LandingCarousel />

                <div id='secBkgndImg1' className='pt-5'>
                    <div className='container pt-5'>

                        <h4 className='Hero-header-copy text-white'>Are you a Barber?</h4>
                        <p className='Hero-body-text text-white'>Start using OmniCut services as a vendor  in three easy steps. <br /> <strong> (1) Join, (2) Style, and (3)  Review. </strong>
                    </p>

                        <a href="/Vendor" className="btn btn-outline-light btnText mb-4">Visit Vendor</a>

                    </div>
                </div>

                <div id='secBkgndImg2' className='pt-5'>
                <div className='pb-5'>
                
                    <div className='container'>

                        <h4 className='Hero-header-text2 text-dark'>Need a Barber?</h4>
                        <p className='Hero-body-text text-dark'>Start using OmniCut services as a client in three easy steps. <br /> 
                        <strong> (1) Join, (2) Search, and (3) Book. </strong>
                    </p>
                        <a href="/Customer" className="btn btn-outline-dark btnText mb-4">Visit Customer</a>
                    </div>
                    </div>
                </div>

            </>
        )
    }
}

export default LandHeroWrapper;