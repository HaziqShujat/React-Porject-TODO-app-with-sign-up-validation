import { useFormik } from "formik";
import "./Formvalidation.css";
import { FormSchemea } from "./FormSchema";
import { useState} from "react";
import FormSigin from "./FormSigin";
const Formvalidation = () => {


  const [isSignipOpen, setIsSignipOpen] = useState(false);

 
  const openSignUp = () =>{
    setIsSignipOpen(true);
  }


  const initialValue = {
    name: "",
    email: "",
    pasward: "",
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
        pasward: true,
        cpass :true
      });
      if (isValid) {
        console.log(values);
        localStorage.setItem('formData',JSON.stringify(values))
       
        resetForm();
      }
      
    },
  });


  return (
    <div>
       {!isSignipOpen && (
    <div>
      <h1>Form Validation</h1>
     
      <form onSubmit={handleSubmit} >
        <label htmlFor="">Enter Name</label>
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
        <label htmlFor="">Enter Email</label>
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

        <label htmlFor="">Enter Password</label>
        <input
          type="password"
          name="pasward"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.pasward}
        />
        {errors.pasward && touched.pasward ? (
          <span style={{ color: "red" }}>{errors.pasward} </span>
        ) : null}

        <label htmlFor=""> Confirm Password</label>
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
        <input type="submit" value="submit"  />

        <div class="form-group">
      
      <p>
        Don't have an account?
        <button onClick={openSignUp}>Sign in</button>
      </p>
 
   
    </div>
      </form> 
    </div>
    )}
    {isSignipOpen &&  <span ><FormSigin /></span>}


    </div>
  );
};

export default Formvalidation;
