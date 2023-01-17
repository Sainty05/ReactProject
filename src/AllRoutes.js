import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MarksheetList from "./Components/MarksheetList";
import UserList from "./Components/UserList";
import StudentList from "./Components/StudentList";
import RoleList from "./Components/RoleList";
import AddMarksheet from "./Components/AddMarksheet";
import AddCollege from "./Components/AddCollege";
import AddRole from "./Components/AddRole";
import AddStudent from "./Components/AddStudent";
import AddUser from "./Components/AddUser";
import CollegeList from "./Components/CollegeList";
import Login from "./Components/Login";
import Home from "./Components/Home";

export default class AllRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/MarksheetList" component={MarksheetList} />
          <Route path="/UserList" component={UserList} />
          <Route path="/StudentList" component={StudentList} />
          <Route path="/CollegeList" component={CollegeList} />
          <Route path="/RoleList" component={RoleList} />
          <Route path="/AddMarksheet" component={AddMarksheet} />
          <Route path="/Marksheet/:pid" component={AddMarksheet} />
          <Route path="/College/:pid" component={AddCollege} />
          <Route path="/Role/:pid" component={AddRole} />
          <Route path="/AddRole" component={AddRole} />
          <Route path="/User/:pid" component={AddUser} />
          <Route path="/Student/:pid" component={AddStudent} />
          <Route path="/AddCollege" component={AddCollege} />
          <Route path="/AddStudent" component={AddStudent} />
          <Route path="/AddUser" component={AddUser} />
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}
