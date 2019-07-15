import React from 'react';
import './style.css';

const FilterWrapper = props => {
    console.log('filterprops', props)
    return (
        <div className='col-md-3 col-12 filter-wrapper'>
            <h4 className='text-center'>Narrow Your Search</h4>
            <hr />
            {/* Name is used in the onChange function. Needs to contain IsChecked, since that's what it's called in state. */}
            <form>
            <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='8'
                            checked={props.apptDay === '8'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        All Availabilities
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='1'
                            checked={props.apptDay === '1'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Sunday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='2'
                            checked={props.apptDay === '2'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Monday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='3'
                            checked={props.apptDay === '3'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Tuesday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='4'
                            checked={props.apptDay === '4'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Wednesday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='5'
                            checked={props.apptDay === '5'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Thursday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='6'
                            checked={props.apptDay === '6'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Friday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='7'
                            checked={props.apptDay === '7'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Saturday
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FilterWrapper;