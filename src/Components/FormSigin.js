import React from "react";
import "./FormSigin.css";
import { useState } from "react";
import Formvalidation from "./Formvalidation";
import { useNavigate } from "react-router-dom";

const FormSigin = () => {
  // const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");

  // const handlePasswordChange = (evnt) => {
  //   setPasswordInput(evnt.target.value);
  // };
  // const togglePassword = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //   } else {
  //     setPasswordType("password");
  //   }
  // };

  const navigate = useNavigate();

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };
  const esubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("formData");
    if (!storedUser) {
      alert("Signup user value not stored. Cannot sign in.");
      return;
    }

    const eobj = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const storedUserData = JSON.parse(storedUser);
    const matchingUser = storedUserData.find(
      (user) =>
        user.email === eobj.username && user.password === eobj.password
    );

    if (matchingUser) {
    
      e.target.reset();
      navigate("./todoapp");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div>
      {!isSignUpOpen && (
        <div>
          <h1>sign in</h1>

          <form onSubmit={esubmit}>
            <h2>Sign In</h2>
            <div>
              <label>Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                id="password"
                // onChange={handlePasswordChange}
                // value={passwordInput}
                name="password"
                required
              />
              {/* <button className=" btn-toggle-password" onClick={togglePassword}>
                <span style={{ color: "black" }}> showpsd</span>
              </button> */}
            </div>

            <div>
              <button type="submit">Sign In</button>
            </div>
            <div>
              <p>
                Don't have an account?
                <button onClick={openSignUp}>Sign Up</button>
              </p>
            </div>
          </form>
        </div>
      )}
      {isSignUpOpen && <Formvalidation />}
    </div>
  );
};

export default FormSigin;
