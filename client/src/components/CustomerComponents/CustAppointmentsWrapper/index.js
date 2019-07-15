import React from 'react';
import './style.css';
import CustAppointmentList from '../CustAppointmentList';
import CustPastApptList from '../CustPastApptList';
import CustApptToggle from '../CustApptToggle';

class CustAppointmentsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingApptsView: true
        }
    };

    // Method to toggle between upcoming appointments and past appointments
    handleToggleView = () => {
        this.state.upcomingApptsView ?
            this.setState({ upcomingApptsView: false }) :
            this.setState({ upcomingApptsView: true })
    }

    render() {
        if (this.state.upcomingApptsView) {
            return (
                <>
                    <div className='cust-appointments-wrapper p-3 generic-body-font'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='cust-appointments-header-text brandLogo mt-3'>Your Upcoming Appointments</h3>
                            <div className='d-flex justify-content-end'>
                                <CustApptToggle
                                    upcomingApptsView={this.state.upcomingApptsView}
                                    handleToggleView={this.handleToggleView} />
                            </div>
                        </div>
                        <hr />
                        <CustAppointmentList />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='cust-appointments-wrapper p-3 generic-body-font'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='cust-appointments-header-text brandLogo mt-3'>Your Past Appointments</h3>
                            <div className='d-flex justify-content-end'>
                                <CustApptToggle
                                    upcomingApptsView={this.state.upcomingApptsView}
                                    handleToggleView={this.handleToggleView} />
                            </div>
                        </div>
                        <hr />
                        <CustPastApptList />
                    </div>
                </>
            )
        }

    }
}

export default CustAppointmentsWrapper;