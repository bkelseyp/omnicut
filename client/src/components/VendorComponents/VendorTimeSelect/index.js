import React from 'react';
import './style.css';

const VendorTimeSelect = props => {
    return (

        <div class="form-group rounded p-5 Hero-wrapper vendor-scheduling-card">
            <h4 className='text-center text-white'>{props.header}</h4>
            {/* <label for="exampleFormControlSelect1" className="text-white">Start time:</label> */}
            <select value={props.formData[props.header.toLowerCase() + 'Start']} onChange={(e) => props.handleFormChange(e, props.header.toLowerCase(), 'Start')}
                className="form-control mb-3" id="exampleFormControlSelect1">
                <option> Select a start time</option>
                <option>1:00am</option>
                <option>2:00am</option>
                <option>3:00am</option>
                <option>4:00am</option>
                <option>5:00am</option>
                <option>6:00am</option>
                <option>7:00am</option>
                <option>8:00am</option>
                <option>9:00am</option>
                <option>10:00am</option>
                <option>11:00am</option>
                <option>12:00pm</option>
                <option>1:00pm</option>
                <option>2:00pm</option>
                <option>3:00pm</option>
                <option>4:00pm</option>
                <option>5:00pm</option>
                <option>6:00pm</option>
                <option>7:00pm</option>
                <option>8:00pm</option>
                <option>9:00pm</option>
                <option>10:00pm</option>
                <option>11:00pm</option>
                <option>12:00am</option>
            </select>
            {/* <label for="exampleFormControlSelect2" className="text-white">End time:</label> */}
            <select value={props.formData[props.header.toLowerCase() + 'End']} onChange={(e) => props.handleFormChange(e, props.header.toLowerCase(), 'End')}
                className="form-control" id="exampleFormControlSelect2">
                <option>Select an end time</option>
                <option>1:00am</option>
                <option>2:00am</option>
                <option>3:00am</option>
                <option>4:00am</option>
                <option>5:00am</option>
                <option>6:00am</option>
                <option>7:00am</option>
                <option>8:00am</option>
                <option>9:00am</option>
                <option>10:00am</option>
                <option>11:00am</option>
                <option>12:00pm</option>
                <option>1:00pm</option>
                <option>2:00pm</option>
                <option>3:00pm</option>
                <option>4:00pm</option>
                <option>5:00pm</option>
                <option>6:00pm</option>
                <option>7:00pm</option>
                <option>8:00pm</option>
                <option>9:00pm</option>
                <option>10:00pm</option>
                <option>11:00pm</option>
                <option>12:00am</option>
            </select>
        </div>
    )
}

export default VendorTimeSelect;