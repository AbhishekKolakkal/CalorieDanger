import React, { Component } from "react";
import { connect } from "react-redux";
import { createMeal } from "../../store/actions/mealActions";
import { Redirect } from "react-router-dom";

class CreateMeal extends Component {
  state = {
    name: "",
    date: "",
    calorie: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createMeal(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Add Meal </h5>
          <div className="input-field">
            <label htmlFor="name">Meal Title</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            {/* <label htmlFor="password">Date</label> */}
            <input type="date" id="date" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="calorie">Calorie</label>
            <input type="number" id="calorie" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createMeal })(CreateMeal);
