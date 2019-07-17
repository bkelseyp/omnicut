import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css';
import BookingModalWrapper from '../BookingModalWrapper';
// Routes
import API from '../../../utils/API.js';
// import DummyBarbers from './DummyBarbers';



class VendorWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barbers: [],
            apptDay: 'all',
        }
        const date = new Date();
        const dayOfWeek = date.getDay()
        console.log('date:', date);
        console.log('day of week:', dayOfWeek);
    }


     // sets state every time the filter boxes change.
     handleFilterChange = event => {
        this.setState({
            apptDay: event.target.value
        });
        this.loadBarbers();
    }

    loadBarbers = () => {
        console.log('func call')
        API.getBarbers()
            .then(res => {
                console.log('zip in vendorWrapper', this.props.clientZip);
                console.log('res', res.data);
                const localClientZip = parseInt(this.props.clientZip);
                const localBarbers = res.data.filter(barber => barber.zipcode === localClientZip);
                // localBarbers.toString();

                // console.log('test', localBarbers.map(barber => barber.daysAvailable))

                const dailyBarbers = localBarbers.filter(barber => barber.daysAvailable.includes(this.state.apptDay))
                console.log('daily', dailyBarbers);
                console.log('localBarbers', localBarbers);
                this.setState({ barbers: dailyBarbers })
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.props.displayVendors === true) {
            console.log('times', this.state.barbers[0])
            return (
                <>
                    <div className='vendor-wrapper container d-flex flex-wrap generic-body-font'>
                        <FilterWrapper
                            apptDay={this.state.apptDay}
                            handleFilterChange={this.handleFilterChange}
                        />
                        <VendorList
                            HandleModalOpen={this.HandleModalOpen}
                            loadBarbers={this.loadBarbers}
                            barbers={this.state.barbers}
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