import React from 'react'
import { Button } from '@mui/material'
import {  createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
import { yellow } from '@mui/material/colors'

// Create a theme instance using the theme builder
// colors must be in hex format or the theme will not work
// the text color will be set automatically in contrast to the background color
const theme = createTheme({
    palette: {
        primary: {
            main: '#00bcd4',
            dark: yellow[500],
            contrastText: '#fff'
        }, 
        secondary:purple
    },
})
function Custom_theme() {
    return (
        // Use the theme instance to create a theme provider
        <ThemeProvider theme={theme}>
            <Button variant='contained' color='primary'>Hello World</Button>
            <Button variant='contained' color='secondary'>Hello World</Button>
        </ThemeProvider>

    )
}

export default Custom_theme