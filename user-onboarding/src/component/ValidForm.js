import * as yup from 'yup';

const validForm = yup.object().shape ({
    fname: yup.string()
        .trim()
        .min(2, 'The first name must be at least two characters long')
        .required('The first name is a required field'),
    lname: yup.string()
        .trim()
        .min(2, 'The last name must be at least two characters long')
        .required('The last name is a required field'),
    password: yup.string()
        .trim()
        .min(8, 'The password must be at least eight characters long')
        .max(25, 'The password max character limit is twenty-five (25)')
        .required('The password is a required field'),
    email: yup.string()
        .email('The email must be a valid email address')
        .required('The email is a required field'),
    terms: yup.boolean().required('Agreeing to the Terms of Service is required'),
  
})

export default validForm
