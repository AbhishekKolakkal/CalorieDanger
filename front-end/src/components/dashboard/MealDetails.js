import React, { Component } from "react";
import { connect } from "react-redux";
import { editMeal } from "../../store/actions/mealActions";
import axios from "axios";

class MealDetails extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.editMeal(this.state);
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`${id}`).then((res) => {
      let data = res.data[0];
      this.setState({ ...data });
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Edit Meal </h5>
          <div className="input-field">
            {/* <label htmlFor="name">Meal Title</label> */}
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            {/* <label htmlFor="password">Date</label> */}
            <input
              type="date"
              id="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            {/* <label htmlFor="calorie">Calorie</label> */}
            <input
              type="number"
              id="calorie"
              value={this.state.calorie}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Edit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { editMeal })(MealDetails);
