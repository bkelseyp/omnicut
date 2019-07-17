import React from 'react'

const OpenBarberBtn = props => {
    console.log('barber id', props.name)
    const selectedBarber = props.name;

    console.log('passed times', props.timeSlots);
    return (
    <button className='book-vendor-btn' onClick={props.handleOpenBarber}>Availabilities</button>
)}

export default OpenBarberBtn;