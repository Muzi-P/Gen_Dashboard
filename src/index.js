
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";
import {InflowsProvider} from "./components/Context/context" 
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <InflowsProvider>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/rtl" render={props => <RTLLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
    </InflowsProvider>,
  document.getElementById("root")
);
