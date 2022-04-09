import { Container } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

import { AppBar } from '@mui/material'

function Layout(props) {
    const drawerWidth = 240;
    const useStyles = makeStyles({
        root: {
            display: 'flex',
        },
        page: {
            background: "#f9f9f9",
            width: "100%",
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        }
    })
    const classes = useStyles()
    return (
        <div className={`first ${classes.root}`}>
            {/* app bar */}

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent" // variant prop is required for seeing the drawer    
                anchor='left' // anchor prop is required for positioning the drawer  // left, right, top, bottom 
                classes={{ // override the default styles of the drawer
                    paper: classes.drawerPaper
                }}
            >
                <div>
                    <Typography color='secondary' variant='h5'>
                        Side Drawer
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout