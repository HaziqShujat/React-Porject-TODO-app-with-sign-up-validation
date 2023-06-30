import * as Yup from 'yup';

  export const FormSchemea = Yup.object({

    name :Yup.string().min(3,'to short').max(10,'Must be 10 characters or less').required('Name is Required'),
    email:Yup.string().email('Invalid email').required('Required'),
    pasward:Yup.string().required('required').matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,'enter Strong pasword'),
    cpass:Yup.string().required('required').oneOf( [Yup.ref('pasward'),null],"Pasword must Matched" )
    

   });


   