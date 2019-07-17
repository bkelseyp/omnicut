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
                            value='all'
                            checked={props.apptDay === 'all'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        All Availabilities
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='sunday'
                            checked={props.apptDay === 'sunday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Sunday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='monday'
                            checked={props.apptDay === 'monday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Monday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='tuesday'
                            checked={props.apptDay === 'tuesday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Tuesday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='wednesday'
                            checked={props.apptDay === 'wednesday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Wednesday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='thursday'
                            checked={props.apptDay === 'thursday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Thursday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='friday'
                            checked={props.apptDay === 'friday'}
                            onChange={props.handleFilterChange}
                            className='m-2' />
                        Friday
                    </label>
                </div>
                <div className='d-flex justify-content-start'>
                    <label>
                        <input type='radio'
                            value='saturday'
                            checked={props.apptDay === 'saturday'}
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