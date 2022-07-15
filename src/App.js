import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HeaderComponent from "../src/views/Header/ApplicationHeader";
import Routes from "./Routes";
function App() {
  const browserHistory = createBrowserHistory();
  return (
    <div className="App">
      <HeaderComponent />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
