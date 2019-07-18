import React from 'react';
import VendorAvailabilityCard from '../VendorAvailabilityCard';
import './style.css';

const ViewVendorAvailability = props => {
    console.log('view', props.formData)
    return (
    <>
        <h3 className='availPageHeader text-center my-3 mt-5'>Your Availabilities</h3>
        <div className='d-flex flex-wrap justify-content-center'>
            <VendorAvailabilityCard
                day='Sunday'
                startTime={props.formData.sundayStart}
                endTime={props.formData.sundayEnd}
            />
            <VendorAvailabilityCard
                day='Monday'
                startTime={props.formData.mondayStart}
                endTime={props.formData.mondayEnd}
            />
            <VendorAvailabilityCard
                day='Tuesday'
                startTime={props.formData.tuesdayStart}
                endTime={props.formData.tuesdayEnd}
            />
            <VendorAvailabilityCard
                day='Wednesday'
                startTime={props.formData.wednesdayStart}
                endTime={props.formData.wednesdayEnd}
            />
            <VendorAvailabilityCard
                day='Thursday'
                startTime={props.formData.thursdayStart}
                endTime={props.formData.thursdayEnd}
            />
            <VendorAvailabilityCard
                day='Friday'
                startTime={props.formData.fridayStart}
                endTime={props.formData.fridayEnd}
            />
            <VendorAvailabilityCard
                day='Saturday'
                startTime={props.formData.saturdayStart}
                endTime={props.formData.saturdayEnd}
            />
        </div>
    </>
)}

export default ViewVendorAvailability;