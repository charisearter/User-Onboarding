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
                   First Name:&nbsp;
                   <input 
                   value={values.fname}
                   onChange={onInputChange}
                   name='fname'
                   type='text'
                   placeholder='Fluffy'
                   />
                </label>

                <label>
                   Last Name:&nbsp;
                   <input 
                   value={values.lname}
                   onChange={onInputChange}
                   id='lname'
                   name='lname'
                   type='text'
                   placeholder='McFlooferkins'
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
                <div> {errors.fname} </div>
                <div> {errors.lname} </div>
                <div> {errors.email} </div>
                <div> {errors.password} </div>
                <div> {errors.terms} </div>
            </div>

            <div className='form-checkbox'>
               
               <label htmlFor='termsInput'>
                   <h3>Do you agree to the Terms of Service</h3> &nbsp;
                   <input 
                   type='checkbox'
                   name='terms'
                   id='termsInput'
                   checked={values.terms}
                   onChange={onCheckboxChange}
                   />
                </label>
            </div>

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
