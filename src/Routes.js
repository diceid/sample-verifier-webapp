import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContentComponent from "../src/views/Content/HomeContent";
import VerifiableCredentialsUserInfo from "../src/views/Content/VerifiableCredentialsUserinfo";
const Routes = () => {
  console.log("router call");

  return (
    <Router>
      <Switch>
        <Route path="/credentialverified">
          <VerifiableCredentialsUserInfo />
        </Route>
        <Route path="/">
          <ContentComponent />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
