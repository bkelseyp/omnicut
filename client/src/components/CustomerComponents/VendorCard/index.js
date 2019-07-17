import React from 'react';
import './style.css';

const VendorCard = props => {
    // console.log('vc', props);
    return (
        <div className='vendor-card col-md-3'>
            <p><strong>Name: </strong>{props.name}</p>
            <p><strong>Base Price: </strong> {props.price}</p>
            <p><em>"{props.message}"</em></p>
            <div className='d-flex justify-content-center'>
                <button className='book-vendor-btn' onClick={props.HandleModalOpen}>Availabilities</button>
            </div>
        </div>
    )
}

export default VendorCard;