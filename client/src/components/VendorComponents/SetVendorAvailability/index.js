import React from 'react';
import VendorTimeSelect from '../VendorTimeSelect';
import './style.css';


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
            formData: { ...this.state.formData, [input_name + startEnd]: event.target.value }
        })
    }

    handleSetAvailability = event => {
        event.preventDefault();
        // alert(this.state.formData.sundayStart);
        const barberAvailability = this.state.formData;
        this.props.passAvailability(barberAvailability);
        // console.log('b', barberAvailability);
    }

    render() {
        return (
            <>
                <h3 className='selectPageHeader text-center my-3 mt-5 mb-3'>Set availability</h3>
                <div className='d-flex justify-content-center mb-5 mt-5'>
                    <form onSubmit={this.handleSetAvailability}>
                        <VendorTimeSelect header="Sunday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Monday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Tuesday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Wednesday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Thursday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Friday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <VendorTimeSelect header="Saturday" formData={() => this.state.formData} handleFormChange={this.handleFormChange} />
                        <button type='submit' value='Submit' className='col-12 btn-lg btn-warning textSub'>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default SetVendorAvailability;