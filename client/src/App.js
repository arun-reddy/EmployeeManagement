import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import {
  Container
} from "semantic-ui-react";
import MyHeader from "./component/MyHeader";
import MyFooter from "./component/MyFooter";
import EmployeeDashboard from "./page/employee/Dashboard";
import EmployeeEdit from "./page/employee/Edit";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <MyHeader />

        {/* Body */}
        <Container text style={{ paddingTop: "3em", "min-height":"calc(100vh - 100px)" }}>
          <Route path="/" exact component={EmployeeDashboard} />
          <Route path="/employee" exact component={EmployeeEdit} />
          <Route path="/employee/:id" exact component={EmployeeEdit} />
        </Container>

        {/* Footer */}
        <MyFooter />
      </React.Fragment>
    );
  }
}

export default App;
