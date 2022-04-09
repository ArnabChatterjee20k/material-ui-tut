// material ui
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles'

// For list component
import List from '@mui/material/List'
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';

// React router dom hooks
import { useHistory , useLocation } from 'react-router-dom';

// date-fns
import {format} from "date-fns" 

function Layout(props) {
    // constants
    const history = useHistory();
    const location = useLocation();
    const drawerWidth = 240;
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: "/view"
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color='secondary' />,
            path: "/"
        }
    ]

    // styles
    const useStyles = makeStyles( {
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
        },
        active:{
            background:"#f4f4f4 !important"
        },
        title:{
            padding:"20px"
        },
        navbar:{
            width:`calc(100% - ${drawerWidth}px) !important`
        },
        date:{
            flexGrow:1 // taking all the possible horizontal space
        }
    })
    const classes = useStyles()

    // rednering the component
    return (
        <div className={`first ${classes.root}`}>
            {/* app bar */}
            <AppBar elevation={1} sx={{background:"#f5f5f5",color:"black"}}  className={classes.navbar}>
                <Toolbar>
                    <Typography variant='h5' className={classes.date}>
                        Today is the {format(new Date() , "do MMMM Y")}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                </Toolbar>
            </AppBar>
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
                    <Typography variant='h5' align='center' className={classes.title}>
                        Side Drawer
                    </Typography>

                    {/* List and links */}
                    <List>
                        {
                            menuItems.map((item) => (
                                    <ListItem
                                        button
                                        key={item.text}
                                        onClick = {()=>history.push(item.path)}
                                        className={location.pathname===item.path?classes.active:null}
                                    >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText>{item.text}</ListItemText>
                                    </ListItem>
                            ))
                        }
                    </List>

                </div>
            </Drawer>
            <div className={classes.page}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout