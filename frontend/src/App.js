import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateApartment from './components/Apartment/createApartment';
import CreateContract from './components/Contract/createContract';
import CreateContractAgreement from './components/ContractAgreement/createContractAgreement';
import LandingPage from './components/LandingPage/landingPage';
import NavigationBar from './components/NavBar/NavBar';
import CreatePropertyOwner from './components/PropertyOwner/createPropertyOwner';
import AddCreditScore from './components/Tenants/addCreditScore';
import CreateTenant from './components/Tenants/createTenant';

const  App = () => {
  return (
    <div className="App">
      <NavigationBar/>
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
          <Route path="/create/contractagreement">
            <CreateContractAgreement/>
          </Route>
          <Route path="/create/propetyowner">
            <CreatePropertyOwner/>
          </Route>
          <Route path="/credit/score">
            <AddCreditScore/>
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
