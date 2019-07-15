import React from 'react';
import './style.css';
import LandingCarousel from '../LandingCarousel';

class LandHeroWrapper extends React.Component {
    render() {
        return (
            <>
                <LandingCarousel />
                

                <div className='Hero-wrapper mt-2'>
                    <h4 className='Hero-header-text text-white'>Are you a Barber?</h4>
                    <p className='Hero-body-text text-white'>Start using OmniCut services as a vendor  in three easy steps. <br/> <strong> (1) </strong>Join <strong> (2) </strong> Style and <strong> (3) </strong> Review
                    </p>

                    <p className='Hero-body-text text-white'> Amet orci nulla. Phasellus hendrerit tincidunt nisi, ac vestibulum sem malesuada ut. Donec faucibus vestibulum enim sed ullamcorper. Duis tincidunt, augue sit amet placerat vehicula, lorem nulla lacinia lectus, sed sodales neque ligula ac nibh. Sed elementum ligula ut ante blandit blandit. Nulla vestibulum pretium mauris tincidunt finibus. Aliquam cursus feugiat tempus. Cras vitae rutrum ante. Aenean porta elementum ligula, sed dictum ipsum.  </p>


                    <a href="/Vendor" className="btn btn-outline-light btnText">Visit Vendor</a>


                </div>

                <div className='Hero-wrapper2 mt-2 mb-4'>
                    <h4 className='Hero-header-text2 text-white'>In need of a Barber?</h4>
                    <p className='Hero-body-text text-white'>Start using OmniCut services as a client in three easy steps. <br/> <strong> (1) </strong>Join <strong> (2) </strong> Search and <strong> (3) </strong> Book
                    </p>
                    <p className='Hero-body-text text-white'> Suspendisse sit amet orci nulla. Phasellus hendrerit tincidunt nisi, ac vestibulum sem malesuada ut. Donec faucibus vestibulum enim sed ullamcorper. Duis tincidunt, augue sit amet placerat vehicula, lorem nulla lacinia lectus, sed sodales neque ligula ac nibh. Sed elementum ligula ut ante blandit blandit. Nulla vestibulum pretium mauris tincidunt finibus. Aliquam cursus feugiat tempus. </p>

                    <a href="/Customer" className="btn btn-outline-light btnText">Visit Customer</a>

                </div>
            </>
        )
    }
}

export default LandHeroWrapper;