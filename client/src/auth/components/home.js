import React, { useState } from "react";
import { toast } from "react-toastify";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";

import SearchRecipe from "./searchRecipe";
import SearchPlants from "./searchPlants";
import ViewPlants from "./viewPlants";

const Home = (props) => {
  const [searchRecipe, setSearchRecipe] = useState(false);
  const [searchPlants, setSearchPlants] = useState(false);
  const [viewPlants, setViewPlants] = useState(false);

  const showSearchRecipe = () => {
    setSearchRecipe(!searchRecipe);
  };

  const showSearchPlants = () => {
    setSearchPlants(!searchPlants);
  };

  const showviewPlants = () => {
    setViewPlants(!viewPlants);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            style={{ marginLeft: 10, width: 150 }}
            onClick={showviewPlants}
          >
            <ViewAgendaIcon></ViewAgendaIcon>View Plants
          </button>
          <button
            className="btn btn-primary"
            style={{ marginLeft: 150, width: 150 }}
            onClick={showSearchPlants}
          >
            <SearchIcon />
            Search Plants
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            style={{ marginLeft: 50, width: 150 }}
            onClick={showSearchRecipe}
          >
            <SearchIcon />
            Search Recipe
          </button>
          <button
            style={{ marginLeft: 150, width: 150 }}
            onClick={() => {
              toast.success("Successfully Logged out!!!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              localStorage.clear();
              props.history.push("/login");
            }}
            type="submit"
            name="action"
            className="btn btn-primary"
          >
            <ExitToAppIcon />
            Logout
          </button>
        </div>
      </div>
      <div className="container">{searchRecipe ? <SearchRecipe /> : null}</div>
      <div className="container">{searchPlants ? <SearchPlants /> : null}</div>
      <div className="container">{viewPlants ? <ViewPlants /> : null}</div>
    </div>
  );
};

export default Home;
