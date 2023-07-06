import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Cbutton = (props:any) => {
    const {name, action}=props;
  return (
   <Button variant="outlined">{props.name}</Button>
  )
}

export default Cbutton