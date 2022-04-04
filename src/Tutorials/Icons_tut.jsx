import React from 'react'
import Button from '@mui/material/Button'
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';

export default function Notes() {
    return (
        <div >
            <Button startIcon={<NoteAddTwoToneIcon/>} type='submit' color='secondary' variant='contained'>Starticon</Button>
            <br/>
            <br/>
            <Button startIcon={<NoteAddTwoToneIcon/>} endIcon={<NoteAddTwoToneIcon/>} type='submit' color='secondary' variant='contained'>Start and end icon</Button>
            <br />
            <NoteAddTwoToneIcon fontSize='large' />
            <NoteAddTwoToneIcon color="primary"></NoteAddTwoToneIcon>
            <NoteAddTwoToneIcon color='warning' fontSize='small' />
            <NoteAddTwoToneIcon color='error' fontSize='small' />
            <NoteAddTwoToneIcon color='success' fontSize='large' />
            <NoteAddTwoToneIcon color='disabled' fontSize='large' />
        </div>
    )
}
