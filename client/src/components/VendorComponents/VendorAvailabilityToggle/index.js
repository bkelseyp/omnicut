import React from 'react';
import './style.css'

const VendorAvailabilityToggle = props => {
    console.log(props.setAvailabilityView)
    if (props.setAvailabilityView) {
        return (
            <div className='row d-flex justify-content-center mt-5'>
                <span id='notAvailToggle' className='not-checked p-2 pt-3 col-sm-4 text-center not-checked-custom text-warning'>Set Your Availability</span>
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn availToggle col-sm-4 text-center btn-lg btn-warning rounded-pill'>View Your Availability</button>
            </div>
        )
    } else {
        return (
            <div className='row d-flex justify-content-center mt-5'>            
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn availToggle col-sm-4 text-center btn-lg btn-primary rounded-pill'>Set Your Availability</button>
                <span id='notAvailToggle' className='not-checked p-2 pt-3 col-sm-4 text-center not-checked-custom text-primary'>View Your Availability</span>
            </div>
        )
    }
}

export default VendorAvailabilityToggle;