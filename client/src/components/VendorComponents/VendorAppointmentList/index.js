import React from 'react';
import VendorAppointment from '../VendorAppointment';
import './style.css';

const VendorAppointmentList = () => (
    <>
        <p>Upcoming Appointments</p>
        <div className='cust-appointment-list'>
            <VendorAppointment />
            <VendorAppointment />
            <VendorAppointment />
        </div>
    </>
);

export default VendorAppointmentList;