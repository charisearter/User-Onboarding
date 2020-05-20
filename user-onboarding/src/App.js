import React from 'react';
import './App.css';
import Form from './component/Form';
import axios from 'axios';
import * as yup from 'yup';

// Setting initial form  values

const initialFormValues = {
  //Text inputs//
  name: '',
  email: '',
  password: '',

  //checkbox input TOS
  terms: false,
}

function App() {
  return (
    <div>

      <Form />

    </div>
  );
}

export default App;
