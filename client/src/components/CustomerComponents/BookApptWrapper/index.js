import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import VendorWrapper from '../VendorWrapper';
import './style.css';
import CustAppointmentsWrapper from '../CustAppointmentsWrapper';
// import smooth scroll package
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import API from '../../../utils/API.js';



class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false,
            displayVendors: false,
            displayFilters: false,
            displayZipMessage: false,
            zipErrorBorder: false,
            // Weekday checkboxes
            clientZip: '',
            isBooked: false,
            apptDay: 'all'
        }
    };

    handleBookAppt = event => {
        console.log('HIT');
        event.preventDefault();
        this.setState({ isBooked: true, displayZipInput: false });
    }

    HandleDisplayZip = () => {
        scroll.scrollTo(200);
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = clientZip => {
        // This block below varifies that the input is 5 digits long. If not, it displays a message to user.
        // const userZip = document.getElementById('zip-input').value;
        const zipREGEX = /^\d{5}$/;
        // test method returns true or false
        const zipResult = zipREGEX.test(clientZip);
        console.log(clientZip);
        // Scroll down to vendor wrapper
        if (zipResult) {
            // scroll.scrollTo(530);
            this.setState({ displayVendors: false, displayZipMessage: false, zipErrorBorder: false, clientZip: clientZip })
            this.loadBarbers()
        } else {
            this.setState({ displayZipMessage: true, zipErrorBorder: true })
        }
    };

    loadBarbers = () => {
        console.log('func call')
        API.getBarbers()
            .then(res => {
                // console.log('zip in vendorWrapper', this.props.clientZip);
                // console.log('res', res.data);
                const localClientZip = parseInt(this.state.clientZip);
                // console.log('client zip', localClientZip);
                const localBarbers = res.data.filter(barber => barber.zipcode === localClientZip);
                console.log('localBarbers', localBarbers);
                console.log('day', this.state.apptDay)
                let dailyBarbers = localBarbers.filter(barber => barber.daysAvailable.includes(this.state.apptDay))
                console.log('daily', dailyBarbers);
                this.setState({ barbers: dailyBarbers, displayVendors: true })
            })
            .catch(err => console.log(err));
    };

    // // These methods handle opening and closing of the modal for booking
    // HandleModalOpen = () => {
    //     this.setState({ showBookingModal: true })
    // }

    // handleModalClose = () => {
    //     this.setState({ showBookingModal: false })
    // }

    render() {
        if (this.state.displayZipInput) {
            return (
                <>
                    <ZipInputWrapper
                        HandleDisplayVendors={this.HandleDisplayVendors}
                        displayZipMessage={this.state.displayZipMessage}
                        zipErrorBorder={this.state.zipErrorBorder}
                        handleZipChange={this.handleZipChange}
                    />
                    {/* Element is part of the smooth scroll npm package */}
                    <Element name='vendor-wrapper'>
                        <VendorWrapper
                            displayVendors={this.state.displayVendors}
                            HandleModalOpen={this.HandleModalOpen}
                            handleModalClose={this.handleModalClose}
                            showBookingModal={this.state.showBookingModal}
                            apptDay={this.state.apptDay}
                            handleFilterChange={this.handleFilterChange}
                            clientZip={this.state.clientZip}
                            handleBookAppt={this.handleBookAppt}
                        />
                    </Element>
                </>
            )
        } else if (this.state.isBooked) {
            return (
                <div className="m-5">
                    <h1 className="text-center">Your appointment has been booked!</h1>
                    <h3 className="text-center">Thank you for using OmniCut</h3>
                    <CustAppointmentsWrapper />
                </div>
            )
        } else {
            return (
                <div className="m-5">
                    <h1 className="text-center">Welcome to OmniCut!</h1>
                    <h4 className="text-center">We're glad you're here! To get started on your way to a great new haircut, click the button below.</h4>
                    <BookApptBtn
                        HandleDisplayZip={this.HandleDisplayZip}
                    />
                </div>
            )
        }
    }
}

export default BookApptWrapper;