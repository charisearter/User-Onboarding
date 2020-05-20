import React from 'react'

function Form() {
    //create advanced form here
    //Name, Email, password, Terms of Service (checkbox) and Submit button
    //Name, Email, Password and TOS required before Submit is available
    return (
       <form>
           <div className='form-text'>
               <h2>Title Goes Here Maybe</h2>
               {/* // Text Input // */}
               <label>Name:&nbsp;</label>
               <label>Email:&nbsp;</label>
               <label>Password &nbsp;</label>

            <div className='form-checkbox'>
               {/* // Checkbox // */}
               <label>Terms of Service</label>
            </div>{/* // Ends form checkbox div*/}
            
            <div className='submit-btn'>
                <button className='btn'>Submit</button>
            </div>{/* // Ends form submit-btn div*/}

           </div>{/* // Ends form text div*/}
       </form>
    )
}

export default Form
