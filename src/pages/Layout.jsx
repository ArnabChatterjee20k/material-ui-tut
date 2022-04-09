import { Container } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import { AppBar } from '@mui/material'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

// For list component
import List from '@mui/material/List'
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useHistory , useLocation } from 'react-router-dom';

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
        },
        active:{
            background:"#f4f4f4 !important"
        }
    })
    const classes = useStyles()

    // rednering the component
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
                    <Typography variant='h5' align='center' >
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