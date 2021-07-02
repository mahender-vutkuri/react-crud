import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserListComponent from "./components/userlist";
import JavaScriptComponent from "./components/testcomp";
import UserClassComponent from "./components/user-class";
import HeaderComponent from "./components/header";
import HomeComponent from "./components/home";
import CreateUserComponent from "./components/newuser";
import SavedUsersComponent from "./components/savedusers";

function App() {
  const userList = ["Ram", "Laxmi", "Harinath"];
  const alertMe = (name: any) => {
    alert("hi from ES6 " + name);
  };
  const [userName, setUserName] = useState("harinath");
  useEffect(() => {}, []);
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />

          <Switch>
            <Route path="/jsx">
              <JavaScriptComponent />
            </Route>
            <Route path="/userlist">
              <UserListComponent />
            </Route>
            <Route path="/register">
              <CreateUserComponent />
            </Route>
            <Route path="/savedusers">
              <SavedUsersComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
