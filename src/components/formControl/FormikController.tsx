import React from "react";
import Input from "./Input";

type Controls =
  "input" |
  "textarea" |
  "select" |
  "radio" |
  "checkbox" |
  "date";

const FormikController = ({ toggleShowPassword, setToggleShowPassword, control, ...rest }: any & { control: Controls; }) => {
  switch (control) {
    case "input":
      return <Input toggleShowPassword={toggleShowPassword} setToggleShowPassword={setToggleShowPassword} {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikController;
