import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/CalarieDashBoard";
import MealDetails from "./components/dashboard/MealDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateMeal from "./components/dashboard/CreateMeal";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let auth = useSelector((state) => state.content.isLogin);
  console.log(auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

function App() {
  // console.log(counter);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/meal/:id" component={MealDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateMeal} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
