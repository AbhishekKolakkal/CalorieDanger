import React, { Component } from "react";
import Meal from "./Meal";
import { connect } from "react-redux";
import { getMeals } from "../../store/actions/mealActions";
import PropType from "prop-types";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMeals();
  }

  render() {
    const { meals } = this.props;
    console.log(meals);
    return (
      <div className="container">
        <span>
          <h1>Dashboard</h1>
          <Link to={"/create"}>
            <button className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </Link>
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

Dashboard.PropType = {
  getMeals: PropType.func.isRequired,
  meals: PropType.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state.content);
  return {
    meals: state.content.meals,
  };
};

export default connect(mapStateToProps, { getMeals })(Dashboard);
