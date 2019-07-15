import React from 'react';
import VendorAvailabilityCard from '../VendorAvailabilityCard';

const ViewVendorAvailability = () => (
    <>
        <h3>Your Availabilities</h3>
        <div className='d-flex flex-wrap justify-content-center'>
            <VendorAvailabilityCard>Sunday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Monday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Tuesday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Wednesday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Thursday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Friday</VendorAvailabilityCard>
            <VendorAvailabilityCard>Saturday</VendorAvailabilityCard>
        </div>
    </>
)

export default ViewVendorAvailability;