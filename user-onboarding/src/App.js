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
  terms: false
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  terms: false
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

//get the users

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data)
    console.log(res.data.data)
  })
  .catch(err => {
    debugger
  })
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers(res.data.data)
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

const onInputChange = evt => {
  const name = evt.target.name //name is targets name
  const value = evt.target.value //value is targets value

  //yup validation

  yup
  .reach(validForm, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ''
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })

//Successful or not set state to the new value
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })

}

const onCheckboxChange = evt => {
  const { name } = evt.target //name is target name
  const { checked } = evt.target //checked to see if target is checked off

  setFormValues({ //set new state for form
    ...formValues, //copy form values
    
    terms: { //overide form value
      ...formValues.terms, //copy current terms
      [name]: checked,  // override
    }
  })

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
     
    }
    // 🔥 STEP 10- POST NEW FRIEND USING HELPER
    postNewUser(newUser)
}


  return (
    <div>

      <Form 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={disabled}
      errors={formErrors}
      onCheckboxChange={onCheckboxChange}
      />

    </div>
  );
}
}

export default App;
