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
      margin: theme.spacing(2),
      width: "30ch",
      minWidth: 270,
    },
  },
}));
const Register = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .strict()
        .trim()
        .required("Name is required")
        .max(15, "Maximum 15 character is required")
        .min(5, "Minimum 5 character required"),
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
      confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .min(6, "Minimum of 6 length")
        .oneOf([yup.ref("password"), null], "Both must be same"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
      axios
        .post("http://localhost:5000/api/register", userInputData)
        .then((res) => {
          toast.success("Registration Success", {
            position: toast.POSITION.TOP_RIGHT,
          });
          props.history.push("/login");
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
          Register
        </h2>

        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <TextField
              autoComplete="off"
              id="standard-basic"
              placeholder="Name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            {formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
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
          <div className="form-group">
            <TextField
              autoComplete="off"
              id="standard-basic"
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className="form-control"
            />
            {formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <button className="btn btn-primary" type="submit" name="action">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
