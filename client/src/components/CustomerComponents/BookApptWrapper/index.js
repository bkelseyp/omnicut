import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import VendorWrapper from '../VendorWrapper';
import './style.css';
// import smooth scroll package
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false,
            displayVendors: false,
            displayFilters: false,
            displayZipMessage: false,
            showBookingModal: false,
            zipErrorBorder: false,
            // Weekday checkboxes
            apptDay: ''
        }
    };

    // sets state every time the filter boxes change.
    handleFilterChange = event => {
        alert(event.target.value);
        this.setState({
            apptDay: event.target.value
        });
    }

    HandleDisplayZip = () => {
        scroll.scrollTo(200);
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = () => {
        // This block below varifies that the input is 5 digits long. If not, it displays a message to user.
        const userZip = document.getElementById('zip-input').value;
        const zipREGEX = /^\d{5}$/;
        // test method returns true or false
        const zipResult = zipREGEX.test(userZip);
        // Scroll down to vendor wrapper
        scroll.scrollTo(530);
        if (zipResult) {
            this.setState({ displayVendors: true, displayZipMessage: false, zipErrorBorder: false })
        } else {
            this.setState({ displayZipMessage: true, zipErrorBorder: true })
        }

    };

    // These methods handle opening and closing of the modal for booking
    HandleModalOpen = () => {
        this.setState({ showBookingModal: true })
    }

    handleModalClose = () => {
        this.setState({ showBookingModal: false })
    }

    render() {
        if (this.state.displayZipInput) {
            return (
                <>
                    <ZipInputWrapper
                        HandleDisplayVendors={this.HandleDisplayVendors}
                        displayZipMessage={this.state.displayZipMessage}
                        zipErrorBorder={this.state.zipErrorBorder}
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
                        />
                    </Element>
                </>
            )
        } else {
            return (
                <BookApptBtn
                    HandleDisplayZip={this.HandleDisplayZip}
                />
            )
        }
    }
}

export default BookApptWrapper;