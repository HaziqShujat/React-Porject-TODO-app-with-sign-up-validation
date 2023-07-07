import React from "react";
import { useFormik } from "formik";
import "./Formvalidation.css";
import { FormSchemea } from "./FormSchema";
import { useState } from "react";
import FormSigin from "./FormSigin";
import { useNavigate } from "react-router-dom";
import { uuid } from "uuidv4";

const Formvalidation = () => {
  const [isSignipOpen, setIsSignipOpen] = useState(false);
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsSignipOpen(true);
  };

  const initialValue = {
    name: "",
    email: "",
    password: "",
    cpass: "",
  };

  const {
    handleSubmit,
    handleChange,
    touched,
    isValid,
    setTouched,
    resetForm,
    values,
    errors,

    handleBlur,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemea,
    onSubmit: (values) => {
      setTouched({
        name: true,
        email: true,
        password: true,
        cpass: true,
      });
      if (isValid) {
        const stoe = [];
        const username = values.username;
        const password = values.password;
        const email = values.email;
        const uniid = uuid();
        const smalid = uniid.slice(0, 8);
        const arryform = JSON.parse(localStorage.getItem("formData") || "[]");

        const isAlreadyEnter = arryform.some(
          (data) =>
            data.username === username &&
            data.password === password &&
            data.email === email
        );

        if (isAlreadyEnter) {
          alert("Username, password, and email already exist.");
        } else {
          const updatedValues = { ...values, id: smalid };
          stoe.push(updatedValues);

          if (arryform) {
            stoe.push(...arryform, updatedValues);
          }

          localStorage.setItem("formData", JSON.stringify(stoe));
          resetForm();
          navigate("./todoapp");
        }
      }
    },
  });

  return (
    <div>
      {!isSignipOpen && (
        <div>
          <h1>Form Validation</h1>

          <form onSubmit={handleSubmit}>
            <label>Enter Name</label>
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <span style={{ color: "red" }}>{errors.name} </span>
            ) : null}
            <label>Enter Email</label>
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <span style={{ color: "red" }}>{errors.email} </span>
            ) : null}

            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <span style={{ color: "red" }}>{errors.password} </span>
            ) : null}

            <label> Confirm Password</label>
            <input
              type="password"
              name="cpass"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cpass}
            />

            {errors.cpass && touched.cpass ? (
              <span style={{ color: "red" }}>{errors.cpass} </span>
            ) : null}
            <input type="submit" value="submit" />

            <div className="form-group">
              <p>
                Don't have an account?
                <button id="signUpButton" onClick={openSignUp}>
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      )}
      {isSignipOpen && (
        <span>
          <FormSigin />
        </span>
      )}
    </div>
  );
};

export default Formvalidation;
