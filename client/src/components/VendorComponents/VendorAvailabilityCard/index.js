import React from 'react';
import './style.css';


const VendorAvailabilityCard = props => (
    <div className='col-sm-3 border my-3 mr-1 ml-1 pt-3 vendor-availability-card'>
        <h3 className='availHeader text-light '><i class="far fa-calendar-alt"></i> {props.day}</h3>
        {/* <p className='text-success'>Availabilities to come...</p> */}
        <p className="text-light">{props.startTime} - {props.endTime}</p>
    </div>
)

export default VendorAvailabilityCard;