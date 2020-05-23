import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({
  name,
  also,
  sowInstructions,
  spaceInstructions,
  avoidInstructions,
  compatiblePlants,
  culinaryHints,
  culinaryPreservation,
}) => {
  return (
    <div className="row">
        <div className="col-sm-6">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">
                {name} aka {also}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{sowInstructions}</li>
              <li className="list-group-item">{spaceInstructions}</li>
              <li className="list-group-item">{avoidInstructions}</li>
              <li className="list-group-item">{compatiblePlants}</li>
              <li className="list-group-item">{culinaryHints}</li>
              <li className="list-group-item">{culinaryPreservation}</li>
              <li className="list-group-item"><Link className="btn btn-success" to="/searchRecipe">{name}</Link></li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default SearchResult;
