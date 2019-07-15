import React from 'react';

const TimeSlotButton = props => (
    <label>
        <input type='radio'
            value={props.children}
            checked={props.timeSlot === props.children}
            onChange={props.handleChange}
            className='m-2' />
        {props.children}
    </label>
)

export default TimeSlotButton;