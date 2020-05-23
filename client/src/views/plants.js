import React, { useContext } from "react";

import { PlantContext } from "../context/plantContext";

const Plants = () => {
  const [plants] = useContext(PlantContext);
  return (
    <div className="row">
      {plants.map((plant) => (
        <div className="col-sm-6">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">
                {plant.Name} aka {plant.also}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{plant.sowInstructions}</li>
              <li className="list-group-item">{plant.spaceInstructions}</li>
              <li className="list-group-item">{plant.avoidInstructions}</li>
              <li className="list-group-item">{plant.compatiblePlants}</li>
              <li className="list-group-item">{plant.culinaryHints}</li>
              <li className="list-group-item">{plant.culinaryPreservation}</li>
              <li className="list-group-item">{plant.Name}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plants;
