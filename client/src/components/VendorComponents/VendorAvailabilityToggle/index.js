import React from 'react';
import './style.css'

const VendorAvailabilityToggle = props => {
    console.log(props.setAvailabilityView)
    if (props.setAvailabilityView) {
        return (
            <div className='row d-flex justify-content-center'>
                <span className='not-checked p-2 pt-3 col-sm-4 text-center border not-checked-custom'>Set Your Availability</span>
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn col-sm-4 text-center btn-lg btn-secondary'>View Your Availability</button>
            </div>
        )
    } else {
        return (
            <div className='row d-flex justify-content-center'>            
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn col-sm-4 text-center btn-lg btn-secondary'>Set Your Availability</button>
                <span className='not-checked p-2 pt-3 col-sm-4 text-center border not-checked-custom'>View Your Availability</span>
            </div>
        )
    }
}

export default VendorAvailabilityToggle;