// Material ui elements
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container  from '@mui/material/Container'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import  FormLabel  from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl'

// React router dom hooks
import { useHistory } from 'react-router-dom';

export default function Notes() {

  const history = useHistory();

  function handle_submit(e){
    e.preventDefault();

    //for reseting the error to false
    setError(false)
    
    title.length>0||detail.length>0
    ? fetch("http://localhost:3001/notes",{headers:{'Content-Type':'application/json'},method:"POST",body:JSON.stringify({title:title,detail:detail,category:category})}).then(()=>history.push("/view")) 
    : setError(true)
  }

  const [title,setTitle] = useState('');
  const [detail,setdetail] = useState('');
  const [Error,setError] = useState(false);

  const values = ["work","school","code","other"]

  const [category,setCategory] = useState(values[3])
  const useStyles = makeStyles({
    form: {
      marginTop: 20,
      marginBottom: 20
    }
  })
  const classes = useStyles()
  return (
    <Container className='notes'>
      <Typography variant='h6' component="h2" color="textSecondary" gutterBottom={true} sx={{paddingTop:"1em"}}>
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' className={classes.form} onSubmit={handle_submit} >
        <TextField
          margin='dense'
          fullWidth
          color='secondary'
          label="Note Title"
          variant="filled"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={Error}
        />
        
        <TextField
          margin='dense'
          fullWidth
          color='secondary'
          label="Note Details"
          variant="filled"
          required
          multiline
          rows={5}
          value={detail}
          onChange={(e) => setdetail(e.target.value)}
          error={Error}
        />
        <FormControl className={classes.form}>
          <FormLabel color="primary">Category</FormLabel>
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
            {values.map((element,index)=>{
              return <FormControlLabel key={index} value={element} control={<Radio color="secondary" />} label={element} />
            })}
          </RadioGroup>
        </FormControl>
        <br />
      <Button endIcon={<ArrowForwardIosIcon />} type='submit' color='error' variant='contained'>Submit</Button>
      </form>

    </Container>
  )
}
