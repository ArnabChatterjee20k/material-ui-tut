import React from 'react'
import { makeStyles } from '@mui/styles'
// makeStyles is a function not a component so we are importing it using object destructuring.

import { Button } from '@mui/material'
function Style_tut() {
    // making styles using object
    const style_options = {
        root: {
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '5px',
            margin: '10px',
            boxShadow: '0px 0px 5px #ccc',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textDecoration: 'underline'
        },
        content: {
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '10px',
        },
        btn: {
            backgroundColor: '#00bcd4',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '10px',
            cursor: 'pointer',
            boxShadow: '0px 0px 5px #ccc',

            "&:hover": {
                backgroundColor: 'red',
            }
        }
    }
    // const useStyles = makeStyles(style_options)
    // using it with a function
    const useStyles = makeStyles((theme)=>style_options) // now we can use that theme argument to make dynamic changes

    const classes = useStyles()

    return (
        <div className={classes.root}>
            Style_tut
            <div className={classes.title}>Title</div>
            <div className={classes.content}>Content</div>
            <button className={classes.btn}>Button</button>
        </div>
    )
}

export default Style_tut