import React from "react";
import "./FormSigin.css";
import { useState } from "react";
import Formvalidation from "./Formvalidation";

const FormSigin = () => {

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };

  
const esubmit = (e) => {
  e.preventDefault(); 
  const eobj = {
    username: e.target.username.value,
    password : e.target.password.value

  };
  console.log(eobj)
  e.target.reset();
  
}



    return (
        <div>
             {!isSignUpOpen && (  
              <div class="container">
                <h1>sign in</h1>
         
    <form onSubmit={esubmit} class="signin-form">
      <h2>Sign In</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
     
      <div class="form-group">
        <button type="submit">Sign In</button>
      </div>
      <div class="form-group">
      
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
    )
}




export default FormSigin;