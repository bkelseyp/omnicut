import React from 'react';
import VendorTimeSelect from '../VendorTimeSelect';


class SetVendorAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                sundayStart: '',
                sundayEnd: '',
                mondayStart: '',
                mondayEnd: '',
                tuesdayStart: '',
                tuesdayEnd: '',
                wednesdayStart: '',
                wednesdayEnd: '',
                thursdayStart: '',
                thursdayEnd: '',
                fridayStart: '',
                fridayEnd: '',
                saturdayStart: '',
                saturdayEnd: ''
            }
        }
    }

    handleFormChange = (event, input_name, startEnd) => {
        this.setState({
            formData: {...this.state.formData, [input_name + startEnd] : event.target.value}
        })
    }

    handleSetAvailability = event => {
        event.preventDefault();
        alert(this.state.formData.sundayStart);
    }

    render() {
        return (
            <>
                <h3>Set availability</h3>
                <form onSubmit={this.handleSetAvailability}>
                    <VendorTimeSelect  header="Sunday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Monday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Tuesday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Wednesday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Thursday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Friday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Saturday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default SetVendorAvailability;