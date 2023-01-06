import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../../../components/formControl/FormikController";
import { Link, useNavigate } from "react-router-dom";


const EmailLogin = () => {
  const [toggleShowPassword, setToggleShowPassword] = React.useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Your password should contain uppercace, special character & number"
      ),
  });
  const navigate = useNavigate();

  const onSubmit = (values: any, onSubmitProps: any) => {

    // onSubmitProps.resetForm(true);
    navigate('/users');
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="form grid">

          <FormikController
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter email"
          />

          <FormikController
            control="input"
            type={!toggleShowPassword ? "password" : "text"} label="Password"
            name="password"
            placeholder="password"
            setToggleShowPassword={setToggleShowPassword}
            toggleShowPassword={toggleShowPassword}
          />
          <Link to="/forgotten-password" className="login__forgotpass">
            Forgot Password?
          </Link>

          <button type="submit" className="button form__button">
            LOG IN
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailLogin;
