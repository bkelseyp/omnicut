import React from 'react';
import './style.css'

const CustApptToggle = props => {
    console.log('btn props', props)
    if (props.upcomingApptsView) {
        return (
            <>
                <span className='not-checked p-2 pt-3 text-white'>Upcoming Appointments</span>
                <button onClick={props.handleToggleView} className='toggle-btn btn-light rounded-pill'>Past Appointments</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={props.handleToggleView} className='toggle-btn btn-light rounded-pill'>Upcoming Appointments</button>
                <span className='not-checked p-2 pt-3 text-white'>Past Appointments</span>
            </>
        )
    }
}

export default CustApptToggle;