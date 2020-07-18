import React, { Component } from "react";
import Meal from "./Meal";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { meals } = this.props;
    return (
      <div className="container">
        <span>
          <h1>Dashboard</h1>
          <button className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </button>
        </span>
        <div className="row">
          {meals &&
            meals.map((meal) => {
              return <Meal meal={meal} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meals: state.meal.meals,
  };
};

export default connect(mapStateToProps)(Dashboard);
