import React from 'react';
import OpenBarberBtn from '../OpenBarberBtn'
import './style.css';
import AvailabilitiesForm from '../AvailabilitiesForm';
import TimeSlotButton from '../TimeSlotButton';

class VendorCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: false
        };
    };

    handleOpenBarber = () => {
        this.setState({ chosen: true })
    }

    handleCloseBarber = () => {
        this.setState({ chosen: false })
    }


    render() {
        const times = this.props.times;
        console.log('times', times);
        if (this.state.chosen) {
            return (
                <div className='vendor-card col-md-4'>
                    <h5 className='text-center'>{this.props.name}'s Availabilities</h5>
                    <AvailabilitiesForm
                        timeSlots={times}
                        handleCloseBarber={this.handleCloseBarber}
                        handleBookAppt={this.props.handleBookAppt}
                    ></AvailabilitiesForm>
                    {/* <form>
                        <TimeForm timeSlots={times}></TimeForm>
                    </form> */}
                </div>
            )
        } else {
            return (
                <div className='vendor-card col-md-4'>
                    <h3 className='text-center'>{this.props.name}</h3>
                    <p><strong>Base Price: </strong> {this.props.price}</p>
                    <p><em>"{this.props.message}"</em></p>
                    <div className='d-flex justify-content-center'>
                        <OpenBarberBtn
                            handleOpenBarber={this.handleOpenBarber}
                            times={this.props.timeSlots}
                            name={this.props.name}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default VendorCard;