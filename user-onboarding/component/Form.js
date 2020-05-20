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
       <form>
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
                   />
                </label>

               <label>
                   Email:&nbsp;
                   <input 
                   value={values.email}
                   onChange={onInputChange}
                   name='email'
                   type='email'
                   />
                </label>

               <label>
                   Password &nbsp;
                   <input 
                   value={values.password}
                   onChange={onInputChange}
                   name='password'
                   type='text'
                   />
                </label>

            <div className='form-checkbox'>
               {/* // Checkbox // */}
               <label>
                   Terms of Service &nbsp;
                   <input 
                   type='checkbox'
                   name='TOS'
                   onChange={onCheckboxChange}
                   checked={values}
                   />
                </label>
            </div>{/* // Ends form checkbox div*/}
            
            <div className='submit-btn'>
                <button className='btn' disabled={disabled}>
                    Submit
                </button>
            </div>{/* // Ends form submit-btn div*/}

           </div>{/* // Ends form text div*/}
       </form>
    )
}

export default Form
