import React from "react";

const meal = ({ meal }) => {
  return (
    <div className="">
      <ul className="collection">
        <li className="collection-item avatar">
          {/* <img src="images/yuna.jpg" alt="" class="circle"></img> */}
          <span className="title">
            {meal.title} - {meal.id}
          </span>
          <p> {meal.calorie} </p>
          <p> SecondLink </p>
          <div className="secondary-content">
            <button className="waves-effect waves-light btn"> Edit </button>
            <button className="waves-effect waves-light btn"> Delete </button>
          </div>
          {/* <a class=" waves-effect waves-light btn">button</a> */}
          {/* <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a> */}
        </li>
      </ul>

      {/* <ul className="collection">
        <li className="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle"></img>
          <span class="title">Title</span>
          <p> FirstLine </p>
          <p> SecondLink </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
      </ul>

      <ul className="collection">
        <li className="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle"></img>
          <span class="title">Title</span>
          <p> FirstLine </p>
          <p> SecondLink </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default meal;
