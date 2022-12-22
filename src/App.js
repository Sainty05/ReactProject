import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
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
import Registration from "./Components/Registration";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="bg-color">
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/registration" component={Registration} />
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
            <Route exact path="/">
              <div className="app"></div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
