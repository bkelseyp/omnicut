import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css';
import BookingModalWrapper from '../BookingModalWrapper';
// Routes
import API from '../../utils/API';



class VendorWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barbers: []
        }

        const date = new Date();
        const dayOfWeek = date.getDay()
        console.log('date:', date);
        console.log('day of week:', dayOfWeek);
    }
    
    loadBarbers = () => {
        API.getBarbers()
            .then(res => {
                console.log('res', res);
                // this.setState({ barbers: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.props.displayVendors === true) {
            return (
                <>
                    <div className='vendor-wrapper container d-flex flex-wrap generic-body-font'>
                        <FilterWrapper 
                                apptDay={this.props.apptDay}
                                handleFilterChange={this.props.handleFilterChange}
    
                        />
                        <VendorList
                            HandleModalOpen={this.props.HandleModalOpen}
                            loadBarbers={this.loadBarbers}
                            barbers={this.state.barbers}
                        />
                    </div>
                    <div>
                        <BookingModalWrapper
                            showBookingModal={this.props.showBookingModal}
                            handleModalClose={this.props.handleModalClose}
                        />
                    </div>
                </>
            )
        } else {
            return null
        }
    }
}

export default VendorWrapper;