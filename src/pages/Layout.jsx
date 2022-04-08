import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

function Layout(props) {
    const useStyles = makeStyles({
        page: {
            background: "#f9f9f9",
            width: "100%"
        }
    })
    const classes = useStyles()
    return (
        <>
        {/* app bar */}
        
        {/* sidebar */}
        
            <Container>
                <div className={classes.page}>
                    {props.children}
                </div>
            </Container>
        </>
    )
}

export default Layout