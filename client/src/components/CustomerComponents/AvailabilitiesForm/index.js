import React from 'react';
import TimeSlotButton from '../TimeSlotButton';
import './style.css'
import TimeSlotList from '../TimeSlotList';

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
            <form className='availabilities-wrapper' onSubmit={this.handleBookAppt}>
                <div>
                    <div className='time-slot-buttons text-center mb-3 d-flex flex-wrap'>
                        {TimesList}
                        {/* <TimeSlotButton
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
                        </TimeSlotButton> */}
                    </div>
                    {/* <div className='d-flex justify-content-center'>
                        <h4>Note to vendor:</h4>
                    </div> */}
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