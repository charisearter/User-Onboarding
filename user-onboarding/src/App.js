import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import validForm from './component/validForm';
import axios from 'axios';
import * as yup from 'yup';

// Setting initial form  values

const initialFormValues = {
  //Text inputs//
  fname: '',
  lname: '',
  email: '',
  password: '',

  //checkbox input TOS
  terms: ''
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  terms: ''
}

//area for users

const initialUsers = [];

 //disabled btn 
const initialDisabled= true;


function App() {
//set state for Users
  const [ users, setUsers ] = useState(initialUsers)
//set state for forms
const [ formValues, setFormValues ] = useState(initialFormValues)

//set state for form errors
const [ formErrors, setFormErrors ] = useState(initialFormErrors)

//set state for disabled button
const [ disabled, setDisabled ] = useState(initialDisabled)


const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([res.data.data, ...users])
    console.log(res.data.data)
  })
  .catch(err => {
    debugger
  })
  .finally(() => {// reset back to start?
    setFormValues(initialFormValues)
  })
}

//Event handlers

const onInputChange = e => {
  
    const { name } = e.target.name;
    const { value } = e.target.value;
    

  //yup validation

  yup
  .reach(validForm, e.target.name)
  .validate(e.target.value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: ''
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: err.errors[0]
    })
  })

//Successful or not set state to the new value
  setFormValues({ ...formValues, [e.target.name]: e.target.value })

}

// const onCheckboxChange = e => {
//   const { name } = e.target //name is target name
//   const { checked } = e.target //checked to see if target is checked off

//   setFormValues({ //set new state for form
//     ...formValues, //copy form values
    
//     //want to check and see if terms is checked
//     terms: { //overide form value
//       ...formValues.terms, //copy current terms
//       [name]: checked,  // override
//     }
//   })
// }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: setDisabled(true)
     
    }

    postNewUser(newUser)
}

//side effect
useEffect(() => {
  //  ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  validForm.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])

  return (
    <div>
        
      <Form 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={disabled}
      errors={formErrors}
      //onCheckboxChange={onCheckboxChange}
      />

    </div>
  );
}


export default App;
