import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
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
  const fname = evt.target.fname
  const lname = evt.target.lname
  const value = evt.target.value
}


  return (
    <div>

      <Form />

    </div>
  );
}

export default App;
