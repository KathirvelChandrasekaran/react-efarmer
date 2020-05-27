import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Row, Col } from "reactstrap";
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

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const SearchRecipe = () => {
  const classes = useStyles();

  const APP_ID = "460ffbc3";
  const APP_KEY = "1cd902d0952d715b2c3bcf73caa94385";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("carrot");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);

    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div style={styles}>
      <Typography align="center" variant="h4" gutterBottom>
        Search the Recipe
      </Typography>
      <div className="form">
        <form onSubmit={getSearch} className="form" className="search-form">
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
      </div>

      <Container>
        <Row>
          {recipes.map((recipe) => (
            <Col xs="6">
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              ></Recipe>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchRecipe;
