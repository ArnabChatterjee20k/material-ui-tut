import Typography from '@mui/material/Typography';
import React from 'react'

function Font() {
    return (
        <>
        <Typography>
            {/* By default the typography component returns p tag */}
            Default p tag returned by typography component by default
        </Typography>
        

        {/* H1 variant with primary color */}
        <Typography variant='h1'color="primary" align="center">
            H1 variant primary color
        </Typography>

        {/* Auto wrapping */}
        <Typography color="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, atque? Voluptatum recusandae similique necessitatibus ipsam earum nam inventore quisquam deserunt exercitationem facere, nisi officiis dolorem deleniti, harum itaque nostrum voluptates, sit numquam qui aspernatur quas eligendi? Deleniti vero voluptatem nam!
        </Typography>


        {/* No auto wrap. The out of frame text will be replaced by dots(...) */}
        <Typography color="secondary" noWrap>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, atque? Voluptatum recusandae similique necessitatibus ipsam earum nam inventore quisquam deserunt exercitationem facere, nisi officiis dolorem deleniti, harum itaque nostrum voluptates, sit numquam qui aspernatur quas eligendi? Deleniti vero voluptatem nam!
        </Typography>


        {/* Component */}
        <Typography variant='h6' component="a">
            h6 with component a
        </Typography>
        </>
    )
}

export default Font