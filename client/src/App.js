import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


// Import pages
import Landing from './pages/Landing';
import CustomerView from './pages/CustomerView';
import VendorView from './pages/VendorView';
// import NoMatch from './pages/NoMatch';
import Nav from './components/Nav'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* MONDAY - THIS IS THE GOOGLE BOOKS SOLUTION FILE STRUCTURE. BRING IN THE CLIENT FOLDER AND COMPONENTS 
          FROM THE OLD REPO AND ADD IN THE PASSPORT STUFF FROM THE NEWSTUFF FOLDER */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/customer" component={CustomerView} />
          <Route exact path="/vendor" component={VendorView} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route component={NoMwatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
