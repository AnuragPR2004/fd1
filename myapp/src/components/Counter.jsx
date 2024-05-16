import React from 'react'

const Counter = () => {
  return (
    <div>
        <br></br>

        <Typography variant="h3">count:{count}</Typography>
        <br></br>
        <Button variants="contained" color="success" onclick={add}>+</Button>
    </div>
  )
}

export default Counter