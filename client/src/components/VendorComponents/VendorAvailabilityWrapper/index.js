import React from 'react';
import ViewVendorAvailability from '../ViewVendorAvailability';
import VendorAvailabilityToggle from '../VendorAvailabilityToggle';
import SetVendorAvailability from '../SetVendorAvailability';

class VendorAvailabilityWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setAvailabilityView: false
        }
    }

    handleAvailabilityToggle = () => {
        this.state.setAvailabilityView ?
            this.setState({ setAvailabilityView: false }) :
            this.setState({ setAvailabilityView: true })
    }

    render() {
        return (
            <>
                <VendorAvailabilityToggle 
                    handleAvailabilityToggle={this.handleAvailabilityToggle}
                    setAvailabilityView={this.state.setAvailabilityView}
                />
                {/* If setAvailabilityView is set to true, render SetVendorAvailability component */}
                {this.state.setAvailabilityView ?
                <SetVendorAvailability />:
                <ViewVendorAvailability /> 
                }
            </>
        )
    }
}

export default VendorAvailabilityWrapper;