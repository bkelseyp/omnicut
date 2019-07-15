import React from 'react';
import './style.css'

const CustApptToggle = props => {
    console.log('btn props', props)
    if (props.upcomingApptsView) {
        return (
            <>
                <span className='not-checked p-2 pt-3'>Upcoming Appointments</span>
                <button onClick={props.handleToggleView} className='toggle-btn'>Past Appointments</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={props.handleToggleView} className='toggle-btn'>Upcoming Appointments</button>
                <span className='not-checked p-2 pt-3'>Past Appointments</span>
            </>
        )
    }
}

export default CustApptToggle;