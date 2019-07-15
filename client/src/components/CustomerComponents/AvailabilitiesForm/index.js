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

    handleBookAppt = () => {
        alert('SUBMITTED!');
    }

    handleChange = event => {
        this.setState({ timeSlot: event.target.value })
    }


    render(props) {
        console.log(this.state.timeSlot)
        // I guess this will contain the available times logic when we know what the data will look like...
        let availableTimes = [];

        return (
            <form onSubmit={this.handleBookAppt}>
                <div className='availabilities-wrapper p-3'>
                    <h3>Availabilities:</h3>
                    <hr />
                    <div className='time-slot-buttons text-center mb-3'>
                        {/* Children will eventually be {this.whatever} */}
                        <TimeSlotButton
                            handleChange={this.handleChange}
                            timeSlot={this.state.timeSlot}
                        >
                            9:00am
                        </TimeSlotButton>
                        <TimeSlotButton
                            handleChange={this.handleChange}
                            timeSlot={this.state.timeSlot}
                        >
                            11:00am
                        </TimeSlotButton>
                        <TimeSlotButton
                            handleChange={this.handleChange}
                            timeSlot={this.state.timeSlot}
                        >
                            12:00pm
                        </TimeSlotButton>
                        <TimeSlotButton
                            handleChange={this.handleChange}
                            timeSlot={this.state.timeSlot}
                        >
                            1:00pm
                        </TimeSlotButton>
                        <TimeSlotButton
                            handleChange={this.handleChange}
                            timeSlot={this.state.timeSlot}
                        >
                            3:00pm
                        </TimeSlotButton>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h4>Note to vendor:</h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <textarea placeholder='Enter message' className='vendor-message-input'></textarea>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <button type="submit">Book</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AvailabilitiesForm;