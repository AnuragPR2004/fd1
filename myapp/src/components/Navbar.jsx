import React from 'react'
import {AppBar,Toolbar,Button,Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
 <AppBar>
  <Toolbar>
    <Typography varient="h6">Home</Typography>
    <Typography varient="h2">Login</Typography>
    <Button varient='contained'>=<Link to='/reg'>ENTER</Link></Button>
    <Button varient='contained'>=<Link to='/m'>Viewdata</Link></Button>
    <Button varient='contained'>=<Link to='/reg'>ENTER</Link></Button>
    
  </Toolbar>
 </AppBar>
 </div>
  )
}

   

export default Navbar