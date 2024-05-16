import React, { useState } from 'react';
import {TextField,Typography,Button} from '@mui/material';

{const Statebasics = () => {
  //Declare state variables
  const [name,setName] = useState("TWITTER");
  const [val,setval]=useState("");
  const[submittedValue, setSubmittedValue]= useState("");
  }
  //Event handler for input change
  const handleInput = (e) =>{
    setVal(e.target.value);
  };
  //Event handler for form submission
  const submitHandler = () => {
    console.log("clicked");
    setSubmittedValue(val);
  };

  return (
    <div>
       < Typography variant='h3'> WELCOME TO {name}</Typography>
      <br />
      <TextField variant="outlined" onChange={handleInput} />
      <Button> variant='contained' onClick={submitHandler}Submit</Button>
          </div>
  )
}

export default Statebasics