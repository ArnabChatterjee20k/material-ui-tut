import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Switch } from '@mui/material'

function Button_tut() {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    }
    return (
        <div className='container' style={style}>
            <Button>Default</Button> {/** color default */}
            <Button variant='text'>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outline</Button>
            <Button variant="contained" color="success">Success</Button>

            <ButtonGroup color="error" variant='outlined'>
                <Button >Default</Button>
                <Button >Default</Button>
                <Button >Default</Button>
            </ButtonGroup>

            <Switch
                name="loading"
                color="primary"
            />

            <Button type="submit" color='warning' variant='outlined'>Submit</Button>
        </div>
    )
}

export default Button_tut