import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./auth/components/home";
import Register from "./auth/components/register";
import Login from "./auth/components/login";
import ProtectedRouter from "./auth/components/protected";
import SearchPlants from "./auth/components/searchPlants";
import ViewPlants from "./auth/components/viewPlants";
import SearchRecipe from "./auth/components/searchRecipe";
import { PlantProvider } from "./auth/context/plantContext";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';


function App() {
  const hasToken = JSON.parse(localStorage.getItem("auth-token"));
  console.log(hasToken);
  
  const NavLinks = (props) => {
    return hasToken ? (
      <div>
        <li className="nav-item">
          <Link className="nav-link text-success" to="home">
            <HomeIcon/>Home
          </Link>
        </li>
      </div>
    ) : (
      <div className="row">
        <li className="nav-item">
          <Link className="nav-link text-success" to="login">
            <LockOpenIcon/>Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success" to="register">
            <VpnKeyIcon/>Register
          </Link>
        </li>
      </div>
    );
  };
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <Link className="navbar-brand" to="/">
          eFarmer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <NavLinks />
          </ul>
        </div>
      </nav>
      <Switch>
        <PlantProvider>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <ProtectedRouter path="/home" component={Home}></ProtectedRouter>
          <ProtectedRouter
            path="/searchPlant"
            component={SearchPlants}
          ></ProtectedRouter>
          <ProtectedRouter
            path="/viewPlant"
            component={ViewPlants}
          ></ProtectedRouter>
          <ProtectedRouter
            path="/searchRecipe"
            component={SearchRecipe}
          ></ProtectedRouter>
        </PlantProvider>
      </Switch>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
