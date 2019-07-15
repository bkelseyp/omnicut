import React from 'react';

const VendorAvailabilityToggle = props => {
    console.log(props.setAvailabilityView)
    if (props.setAvailabilityView) {
        return (
            <>
                <span className='not-checked p-2 pt-3'>Set Your Availability</span>
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn'>View Your Availability</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={props.handleAvailabilityToggle} className='toggle-btn'>Set Your Availability</button>
                <span className='not-checked p-2 pt-3'>View Your Availability</span>
            </>
        )
    }
}

export default VendorAvailabilityToggle;