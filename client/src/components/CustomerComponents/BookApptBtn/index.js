import React from 'react';

const BookApptBtn = props => (
    <>
        <div className='btn-wrapper'>
            <button className='book-appt-btn' onClick={props.HandleDisplayZip}>Book an Appointment</button>
        </div>
    </>
)

export default BookApptBtn;