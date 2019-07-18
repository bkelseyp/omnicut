import React from 'react';
import './style.css'
import axios from 'axios';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVendor: false,
            name: '',
            email: '',
            password: '',
            zipcode: 0,
            basePrice: 0,
            bio: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // When form is submitted, we create a newBarber object, containing the values from the user. 
        // This should then be passed through axios 
        const newBarber = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            zipcode: this.state.zipcode,
            basePrice: this.state.basePrice,
            bio: this.state.bio,
            isVendor: true,
            daysAvailable: ['sunday', 'monday', 'all'],
            timesAvailable : [ "7:00am", "8:00am", "9:00am", "2:00pm", "8:00pm", "9:00pm"]
        }
        console.log(newBarber);
        // =========================================================
        //JASON - this is where the submit functionality should live
        // =========================================================
        axios.post('/api/barber', newBarber)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error.response.data);
            })

    }
    // test for commit
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });

    };


    handleVendorClick = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            isVendor: target.checked
        });
        // console.log(event);
        // this.setState({
        //     isVendor: true
        // });
    }

    render(props) {
        // console.log(this.state.isVendor)
        return (
            <form onSubmit={this.handleSubmit} className='formMargin'>
                <div className='LoginWrapper mb-2'>
                    <h1 className="welcome-header mt-5">Join Now</h1>
                    <h3 className="welcome-subHeader mb-2">Sign Up</h3>

                    <div className=''>

                        <div className="form-group">
                            <label htmlFor="InputName">Name</label>
                            <input name='name' onChange={this.handleInputChange} type="name" className="form-control" id="InputName" placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword">Password</label>
                            <input type="text" name="password" onChange={this.handleInputChange} className="form-control" id="InputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputZip">Zipcode</label>
                            <input type="number" name="zipcode" onChange={this.handleInputChange} className="form-control" id="InputZip" placeholder="12345" />
                        </div>

                        {/* Vendor Question Section --> */}
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Click yes if you're a vendor! </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="1"
                                    id="defaultCheck1"
                                    type="checkbox"
                                    checked={this.state.isVendor}
                                    onChange={this.handleVendorClick} />
                                <label className="form-check-label" htmlFor="defaultCheck1">Yes</label>
                            </div>
                        </div>
                        {/* Vendor Question Section <-- */}


                        {this.state.isVendor &&
                            <>
                                <div className="form-group displayVendor">
                                    <label htmlFor="InputPrice">Base Price</label>
                                    <input type="number" name='basePrice' onChange={this.handleInputChange} className="form-control" id="InputPrice" placeholder="$$$" />
                                </div>
                                <div className="form-group displayVendor">
                                    <label htmlFor="FormControlTextarea1">Bio</label>
                                    <textarea className="form-control" name="bio" onChange={this.handleInputChange} id="FormControlTextarea1" rows="3"></textarea>
                                </div>
                            </>
                        }

                        <button className="btn btn-primary">Submit</button>

                    </div>
                </div>
            </form>
        )
    }
}
export default SignUpForm;


{/* 

import React from 'react';
import './style.css';


const SignUpForm = props => {
    console.log(props);
    return (
        <>
            <div className='LoginWrapper mb-2'>
                <h1 className="welcome-header">Join Now</h1>
                <h3 className="welcome-subHeader">Sign Up</h3>
                <div>
                    <form className='InnerForm'>
                        <div className="form-group">
                            <label for="InputName">Name</label>
                            <input name='name' type="name" className="form-control" id="InputName" placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="text" className="form-control" id="InputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="InputZip">Zipcode</label>
                            <input type="number" className="form-control" id="InputZip" placeholder="12345" />
                        </div> */}


{/* Vendor Question Section --> */ }
{/* <div className="form-group">
                            <label for="formGroupExampleInput">Click yes if you're a vendor? </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="1" id="defaultCheck1" onClick={props.HandleIsVendor} />
                                <label className="form-check-label" for="defaultCheck1">Yes</label>
                            </div>
                        </div> */}
{/* Vendor Question Section <-- */ }


{/* <div className="form-group">
                            <label for="exampleFormControlFile1">Upload your Photo</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div> */}


{/* Vendor Input Section, display if they click yes. Where do i put the javascript for this? --> */ }
{/* <div className="form-group displayVendor">
                            <label for="InputPrice">Base Price</label>
                            <input type="number" className="form-control" id="InputPrice" placeholder="$$$" />
                        </div>
                        <div class="form-group displayVendor">
                            <label for="FormControlTextarea1">Bio</label>
                            <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div> */}
{/* Vendor Input Section,  <-- */ }

{/* 
                        <button className="btn btn-primary" onClick={props.HandleLoginSubmit}>Submit</button>
                    </form>
                    <h5 className='mt-3 acctQuestion'>Already have an account? <a href='/LogIn'>Sign In!</a></h5>
                </div>
            </div>
        </>
    )
}
export default SignUpForm;  */}