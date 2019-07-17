import React from 'react';
import VendorCard from '../VendorCard';
import BookingModalWrapper from '../BookingModalWrapper';
import CustAppointmentsWrapper from '../CustAppointmentsWrapper';
import './style.css';
// import DummyBarbers from '../VendorWrapper/DummyBarbers';


class VendorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBookingModal: false,
        }
    }

    handleSelectBarber = chosen => {
        console.log('chosen', chosen);
        // this.setState({ selectedBarber:  })
    }

    // These methods handle opening and closing of the modal for booking
    HandleModalOpen = () => {
        this.setState({ showBookingModal: true })
    }

    handleModalClose = () => {
        this.setState({ showBookingModal: false })
    }

    componentDidMount() {
        console.log('mount call')
        this.props.loadBarbers();
    }

    


    render() {
        console.log('vl props', this.props)
        // console.log('DummyBarbers', DummyBarbers);
        // console.log('props', this.props.barbers)
        // console.log('dummy', DummyBarbers)
        const dbBarbers = this.props.barbers.map(barber => {
            // console.log('barber', barber)
            return (
                <VendorCard
                    name={barber.name}
                    price={barber.basePrice}
                    message={barber.bio}
                    key={barber.id}
                    HandleModalOpen={this.HandleModalOpen}
                    times={barber.timesAvailable}
                    handleSelectBarber={this.handleSelectBarber}
                    handleBookAppt={this.props.handleBookAppt}
                />

            )
        })
        // if (!this.state.isBooked) {
            return (
                <>
                    <div className='vendor-list col-md-9 col-12'>
                        {dbBarbers}
                    </div>
                    <div>
                        <BookingModalWrapper
                            showBookingModal={this.state.showBookingModal}
                            handleModalClose={this.handleModalClose}
                            barbers={this.props.barbers}
                        />
                    </div>
                </>
            )
        
            
    }
}

export default VendorList;