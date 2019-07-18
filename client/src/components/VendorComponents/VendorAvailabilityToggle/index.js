import React from 'react';
import './style.css'

const VendorAvailabilityToggle = props => {
    console.log(props.setAvailabilityView)
    if (props.setAvailabilityView) {
        return (
            <div className='row d-flex justify-content-center mt-5'>
                <span id='notAvailToggle' className='not-checked p-2 pt-3 col-sm-4 text-center not-checked-custom'>Set Your Availability</span>
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn availToggle col-sm-4 text-center text-white btn-lg rounded-pill'>View Your Availability</button>
            </div>
        )
    } else {
        return (
            <div className='row d-flex justify-content-center mt-5'>            
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn availToggle col-sm-4 text-center btn-lg text-white rounded-pill'>Set Your Availability</button>
                <span id='notAvailToggle' className='not-checked p-2 pt-3 col-sm-4 text-center not-checked-custom'>View Your Availability</span>
            </div>
        )
    }
}

export default VendorAvailabilityToggle;