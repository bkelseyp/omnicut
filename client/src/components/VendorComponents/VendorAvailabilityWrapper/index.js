import React from 'react';
import ViewVendorAvailability from '../ViewVendorAvailability';
import VendorAvailabilityToggle from '../VendorAvailabilityToggle';
import SetVendorAvailability from '../SetVendorAvailability';

class VendorAvailabilityWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setAvailabilityView: false,
            formData: ''
        }
    }

    handleAvailabilityToggle = () => {
        this.state.setAvailabilityView ?
            this.setState({ setAvailabilityView: false }) :
            this.setState({ setAvailabilityView: true })
    }

    passAvailability = (passedForm) => {
        console.log('passed', passedForm);
        this.setState({ formData: passedForm, setAvailabilityView: false })
    }

    render() {
        return (
            <div className='container'>
                <VendorAvailabilityToggle 
                    handleAvailabilityToggle={this.handleAvailabilityToggle}
                    setAvailabilityView={this.state.setAvailabilityView}
                />
                {/* If setAvailabilityView is set to true, render SetVendorAvailability component */}
                {this.state.setAvailabilityView ?
                <SetVendorAvailability 
                    passAvailability={this.passAvailability}
                />:
                <ViewVendorAvailability 
                    formData={this.state.formData}
                /> 
                }
            </div>
        )
    }
}

export default VendorAvailabilityWrapper;