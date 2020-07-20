import axios from "axios";

export const signUp = (data) => (dispatch) => {
  console.log("qwertyu", data);
  axios
    .post("auth/signup", data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "SIGNUP",
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log("Error", e);
    });
};

export const login = (data) => (dispatch) => {
  //   dispatch(setMealsLoading());
  axios
    .get("auth/login", {
      headers: {
        email: data.email,
        password: data.password,
      },
    })
    .then((res) =>
      dispatch({
        type: "GET_MEALS",
        payload: res.data,
      })
    )
    .catch((e) => {
      console.log(e, "error");
    });
};
