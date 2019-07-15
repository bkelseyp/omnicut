import React from 'react';
import './style.css';

class ZipInputWrapper extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    handleSubmitZip = event => {
        event.preventDefault();
        this.props.HandleDisplayVendors();
    }

    render() {
        console.log('zip input props', this.props);

        const zipMessageStyle = this.props.displayZipMessage ?
            { display: 'flex' } : { display: 'none' };

        const zipInputStyle = this.props.zipErrorBorder ?
            { border: '2px solid #f00' } : null;

        return (
            <div className='zip-input-wrapper generic-body-font'>
                <h3 className='flex-row '>Where do you want to schedule your appointment?</h3>
                <form onSubmit={this.handleSubmitZip}>
                    <div className='flex-row'>
                        <input
                            placeholder='zipcode'
                            type='number'
                            id='zip-input'
                            style={zipInputStyle}
                        />
                    </div>
                    <div className='flex-row'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <div style={zipMessageStyle} className='zip-message justify-content-center'>
                    <p>Please enter a valid zipcode.</p>
                </div>
            </div>
        )
    }
}

export default ZipInputWrapper;