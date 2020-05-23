import React, { useEffect, useState } from "react";

import SearchResult from "./searchResult";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchPlant = () => {
  const classes = useStyles();
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("Carrot");

  useEffect(() => {
    getPlants();
  }, [query]);
  const getPlants = async () => {
    const response = await fetch(
      `http://localhost:5000/api/searchPlant/${query}`
    );
    const data = await response.json();
    console.log(data);
    setPlants(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={getSearch}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Plants"
            value={search}
            onChange={updateSearch}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>

      <div>
        {plants.map((plant) => (
          <SearchResult
            key={plant._id}
            name={plant.Name}
            also={plant.also}
            sowInstructions={plant.sowInstructions}
            spaceInstructions={plant.spaceInstructions}
            avoidInstructions={plant.avoidInstructions}
            compatiblePlants={plant.compatiblePlants}
            culinaryHints={plant.culinaryHints}
            culinaryPreservation={plant.culinaryPreservation}
          ></SearchResult>
        ))}
      </div>
    </div>
  );
};

export default SearchPlant;
