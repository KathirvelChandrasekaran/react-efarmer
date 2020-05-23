import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string(0)
        .email()
        .required("Email is required")
        .strict()
        .trim(),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Minimum of 6 length"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
      axios
        .post("http://localhost:5000/api/login", userInputData)
        .then((res) => {
          localStorage.setItem("auth-token", JSON.stringify(res.data));
          toast.success("Login Succes!!!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          props.history.push("/home");
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
  });
  return (
    <div className="container d-flex justify-content-center">
      <div className="card-container">
        <h2
          className="d-flex justify-content-center"
          style={{ marginBottom: 50 }}
        >
          Login
        </h2>
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <TextField
              autoComplete="off"
              id="standard-basic"
              placeholder="Email"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <TextField
              autoComplete="off"
              id="standard-basic"
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
            />
            {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className="btn btn-primary" type="submit" name="action">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
