import React from 'react';
import './style.css';


const VendorAvailabilityCard = props => (
    <div className='col-sm-3 border my-3 mr-1 ml-1 pt-3'>
        <h3 className='availHeader text-primary '><i class="far fa-calendar-alt"></i> {props.children}</h3>
        <p className='text-success'>Availabilities to come...</p>
    </div>
)

export default VendorAvailabilityCard;