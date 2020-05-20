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


  return (
    <div>

      <Form />

    </div>
  );
}

export default App;
