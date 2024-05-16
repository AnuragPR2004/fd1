import React,{ useState }from "react"

const Use = () => {
    var[x,setx]=useState()
    return (
        <div>
            <Button variants="contained" color="success onClick={react}>re.
            &nbsp; &nbsp;
            <Button variants="contained" color="error onClick={angular}>an.
            &nbsp; &nbsp;
            <Button variants="contained" color="success onClick=node}>re.
            &nbsp; &nbsp;
        </div>
    )
}

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
