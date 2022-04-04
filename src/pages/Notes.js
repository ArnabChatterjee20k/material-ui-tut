import React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
export default function Notes() {
  return (
    <Container >
      <Typography variant='h6' component="h2" color="textSecondary" gutterBottom={true}>
        Create a New Note
      </Typography>
      <Button type='submit' color='secondary' variant='contained' onClick={()=>{alert("Hellow world")}}>Submit</Button>
    </Container>
  )
}
