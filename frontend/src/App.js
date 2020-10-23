import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateTenant from './components/Tenants/createTenant';

const  App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/create/tenant">
      <CreateTenant/>
          </Route>
          <Route exact path="/create/propetyowner">
      <div>Create PropertyOwner here</div>
          </Route>
          <Route exact path="/">
            <div>You are on the landing page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
