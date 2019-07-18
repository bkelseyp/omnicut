import React from 'react';
import './style.css';

class ZipInputWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipInputValue: '',
        }
    }

    handleZipChange = event => {
        this.setState({ zipInputValue: event.target.value })
    }

    handleSubmitZip = event => {
        event.preventDefault();
        const clientZip = this.state.zipInputValue;
        this.props.HandleDisplayVendors(clientZip);
    }

    render() {
        // console.log('zip input props', this.props);

        const zipMessageStyle = this.props.displayZipMessage ?
            { display: 'flex' } : { display: 'none' };

        const zipInputStyle = this.props.zipErrorBorder ?
            { border: '2px solid #f00' } : null;

        return (
            <div className='zip-input-wrapper generic-body-font Hero-wrapper'>
                <h3 className='flex-row text-white questZip'>Where do you want to schedule your appointment?</h3>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={this.handleSubmitZip} className='flex-row'>
                        <div className='flex-row form-group'>
                            <input className="form-control"
                                placeholder='zipcode'
                                type='number'
                                id='zip-input'
                                onChange={this.handleZipChange}
                                style={zipInputStyle}
                            />
                        </div>
                        <div className='flex-row'>
                            <button type='submit' className='btn btn-light rounded subBtnZip'>Submit</button>
                        </div>
                    </form>
                </div>
                <div style={zipMessageStyle} className='zip-message justify-content-center pr-2 pl-2'>
                    <p><strong>Please enter a valid zipcode.</strong></p>
                </div>
            </div>
        )
    }
}

export default ZipInputWrapper;