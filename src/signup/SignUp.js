import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import "./SignUp.css"
import 'bulma/css/bulma.css';

const SignUp = () => {
    return(
   <div>
    <Navbar />
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="password" type="password" placeholder="*******" />
      <CoolButton isSmall isSuccess className="is-rounded my-class" label="Submit">Submit</CoolButton>
    </div>
  </div>
    );
};

export default SignUp;