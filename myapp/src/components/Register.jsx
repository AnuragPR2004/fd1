import{ Textfield }from '@mui/material'
import React from 'react';

const Register = () => {
  return (
    <div>
     <TextField id="outlined-basic" label="username" variant="outlined"></TextField><br></br>
     <TextField id="outlined-basic" label="password" variant="outlined"></TextField><br></br>


    <button varient="constant">Submit</button>
    </div>
  )
}

export default Register