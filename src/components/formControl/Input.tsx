import React from "react";
import { Field, ErrorMessage } from "formik";
import ValidationErrorText from "./ValidationErrorText";

const Input = ({ label, name, setToggleShowPassword, toggleShowPassword, ...rest }: any) => {

  return (
    <div className="form__inputfield">
      {/* <label htmlFor={name} className="form__inputfield-label">
        {label}
      </label> */}

      <Field name={name}>
        {(props: any) => {
          const { field, form, meta } = props;
          return (
            <>
              <input
                id={name}
                {...rest}
                {...field}
                className={`${meta.touched && meta.error
                  ? "form__inputfield-error form__inputfield-input"
                  : "form__inputfield-input"
                  } `}
              />
              {name === "password" ? <span onClick={() => setToggleShowPassword(!toggleShowPassword)} className={`${meta.touched && meta.error
                ? "form__inputfield-errorshowpass form__inputfield-showpass"
                : "form__inputfield-showpass"
                } `}>SHOW</span> : null}
            </>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ValidationErrorText} />
    </div>
  );
};

export default Input;
