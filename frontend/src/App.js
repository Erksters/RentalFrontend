import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateApartment from './components/Apartment/createApartment';
import CreateContract from './components/Contract/createContract';
import LandingPage from './components/LandingPage/landingPage';
import CreatePropertyOwner from './components/PropertyOwner/createPropertyOwner';
import CreateTenant from './components/Tenants/createTenant';

const  App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create/tenant">
          <CreateTenant/>
          </Route>
          <Route path="/create/apartment">
          <CreateApartment/>
          </Route>
          <Route path="/create/contract">
            <CreateContract/>
          </Route>
          <Route exact path="/create/propetyowner">
            <CreatePropertyOwner/>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
