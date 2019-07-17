import React from 'react';
import TimeSlotButton from '../TimeSlotButton';
import './style.css'

class AvailabilitiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSlot: ''
        }
    }



    handleChange = event => {
        this.setState({ timeSlot: event.target.value })
    }


    render() {
        const times = this.props.timeSlots || [];
        console.log('form barbersss', times.timeSlots);
        const TimesList = times.map(time => (
            <TimeSlotButton
                handleChange={this.handleChange}
                timeSlot={this.state.timeSlot}
            >
                {time}
            </TimeSlotButton>
        ))

        // I guess this will contain the available times logic when we know what the data will look like...

        return (
            <form className='availabilities-wrapper' onSubmit={this.props.handleBookAppt}>
                <div>
                    <div className='time-slot-buttons text-center mb-3 d-flex flex-wrap'>
                        {TimesList}
                    </div>
                    {/* <div className='d-flex justify-content-center'>
                        <h4>Note to vendor:</h4>
                    </div> */}
                    <div className='d-flex justify-content-center'>
                        <textarea placeholder='Enter message' className='vendor-message-input'></textarea>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <div className="col-6">
                            <button onClick={this.props.handleCloseBarber} className='btn btn-lrg mx-1 mb-2'>Back</button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className='btn btn-lrg mx-1 mb-2'>Book</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default AvailabilitiesForm;