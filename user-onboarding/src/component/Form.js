import React from 'react'
//form will have props passed into it
function Form(props) {

    const { 
        values, 
        onInputChange, 
        onSubmit, 
        onCheckboxChange, 
        disabled, 
        errors, 
    } = props;
    //create advanced form here
    //Name, Email, password, Terms of Service (checkbox) and Submit button
    //Name, Email, Password and TOS required before Submit is available
    return (
       <form className='form-container' onSubmit={onSubmit}>
           <div className='form-text'>
               <h2>Title Goes Here Maybe</h2>

               {/* // Text Input // */}
               <label>
                   Name:&nbsp;
                   <input 
                   value={values.name}
                   onChange={onInputChange}
                   name='name'
                   type='text'
                   placeholder='Fluffy McFlooferkin'
                   />
                </label>

               <label htmlFor='emailInput'>
                   Email:&nbsp;
                   <input 
                   value={values.email}
                   onChange={onInputChange}
                   id='emailInput'
                   name='email'
                   type='email'
                   placeholder='youremail@email.com'
                   />
                </label>

               <label htmlFor='passwordInput'>
                   Password &nbsp;
                   <input 
                   value={values.password}
                   onChange={onInputChange}
                   id='passwordInput'
                   name='password'
                   type='password'
                   placeholder='Password'
                   />
                </label>

                {/* // Errors // */}
            <div className='errors'>
                <div> {errors.name} </div>
                <div> {errors.email} </div>
                <div> {errors.password} </div>
                <div> {errors.terms} </div>
            </div>

            <div className='form-checkbox'>
               {/* // Checkbox // */}
               <label htmlFor='termsInput'>
                   <h3>Do you agree to the Terms of Service</h3> &nbsp;
                   <input 
                   type='checkbox'
                   name='terms'
                   id='termsInput'
                   onChange={onCheckboxChange}
                   checked={values}
                   />
                </label>
            </div>{/* // Ends form checkbox div*/}

             {/* // Submit Button // */}
            <div className='submit-btn'>
                {/* //disable button until form is complete */}
                <button className='btn' disabled={disabled}>
                    Submit
                </button>
            </div>{/* // Ends form submit-btn div*/}

           </div>{/* // Ends form text div*/}
       </form>
    )
}

export default Form
