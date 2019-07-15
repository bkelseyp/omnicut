import React from 'react';
import './style.css';


const LogInForm = props => {
    console.log(props);
    return (
        <>
            <div className='LoginWrapper mb-2'>
                <h1 className="welcome-header">Welcome back</h1>
                <h3 className="welcome-subHeader">Login</h3>
                <div>
                    <form className='InnerForm'>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="text" className="form-control" id="InputPassword" placeholder="Password" />
                        </div>

                        <button className="btn btn-primary" onClick={props.HandleLoginSubmit}>Submit</button>
                    </form>
                    <h5 className='mt-3 acctQuestion'>Don't have an account? <a href='/SignUp'>Sign up!</a></h5>
                </div>
            </div>
        </>
    )
}

export default LogInForm;