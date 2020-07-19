import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteMeal } from "../../store/actions/mealActions";
import { connect } from "react-redux";
import PropType from "prop-types";

export class Meal extends Component {
  onDeleteClick = (id) => {
    this.props.deleteMeal(id);
  };

  render() {
    const { meal } = this.props;
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
              <Link to={"/meal/" + meal.id}>
                <button className="waves-effect waves-light btn"> Edit </button>
              </Link>
              <button
                onClick={this.onDeleteClick.bind(this, meal.id)}
                className="waves-effect waves-light btn"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Meal.PropType = {
  deleteMeal: PropType.func.isRequired,
};

export default connect(null, { deleteMeal })(Meal);
