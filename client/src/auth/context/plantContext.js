import React, { createContext, useState, useEffect } from "react";

export const PlantContext = createContext();

export const PlantProvider = (props) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants();
  }, []);
  const getPlants = async () => {
    const response = await fetch("http://localhost:5000/api/viewPlants");
    const data = await response.json();
    console.log(data);
    setPlants(data);
  };
  return (
    <PlantContext.Provider
      value={[plants, setPlants]}
    >
      {props.children}
    </PlantContext.Provider>
  );
};
