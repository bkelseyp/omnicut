import React from 'react';
import LogInForm from '../../components/LandingComponents/LogInForm';
import Axios from 'axios';



class LogIn extends React.Component{
    constructor(){
        super();
        this.state = {
            formData: {
                email: "",
                password: ""
            },
           
        }
    } 

    handleEmailChange = (event) => {
        this.setState({
            formData: {...this.state.formData, email: event.target.value}
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            formData: {...this.state.formData, password: event.target.value}
        })
    } 
    handleLoginSubmit = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/api/auth/login", this.state.formData)
        .then((res) => {
            console.log('res', res);
            if(res.data.success){
                localStorage.setItem("userid", res.data.userid);
                this.props.history.push("/Vendor");

            }
            
        }).catch((err) => {
            console.log(err)
        }) 
    }

    render(){
        return(
            <>
                <LogInForm 
                    handlePasswordChange={this.handlePasswordChange} 
                    handleEmailChange={this.handleEmailChange}
                    handleLoginSubmit={this.handleLoginSubmit}
                />
            </>
        )
    }

}
   
export default LogIn;
