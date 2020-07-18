import React from "react";

const MealDetails = (props) => {
  // console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Meal Title - {id}</span>
          <p> Meal Summary </p>
          <p> Date </p>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
