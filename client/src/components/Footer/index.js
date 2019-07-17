import React from 'react';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <>
            <nav className="navbar fixed-bottom navbar-light bg-dark text-center">
                <div className='text-center'>
               <a className="navbar-brand brandLogo text-white" href="/">OmniCut</a>      
                </div>
           
</nav>
            {/* <div className="fixed-bottom bg-primary mt-5">
            <nav className="navbar navbar-dark bg-dark">
   Navbar content -->
</nav>
                
            </div> */}

            </>
        )
    }
}

export default Footer;

