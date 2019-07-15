import React from 'react';
import CustAppointment from '../CustAppointment';
import './style.css';

const CustAppointmentList = () => (
    <>
        <div className='cust-appointment-list'>
            <CustAppointment />
            <CustAppointment />
            <CustAppointment />
        </div>
    </>
);

export default CustAppointmentList;