import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { Typography } from '@mui/material';
function Card_tut() {
    return (
        <Container sx={{margin:"1rem"}}>
            <Card>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <Delete />
                        </IconButton>
                    }
                    title="Card Title"
                    subheader="Subtitle"
                />
                <CardContent>
                    <Typography variant='body-2' color="textSecondary">
                        textSecondary
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card elevation={10}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <Delete />
                        </IconButton>
                    }
                    title="With elevation prop"
                    subheader="Subtitle"
                />
                <CardContent>
                    <Typography variant='body-2' color="textSecondary">
                        textSecondary
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card elevation={6}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <Delete />
                        </IconButton>
                    }
                    title="With elevation prop"
                    subheader="Subtitle"
                />
                <CardContent>
                    <Typography variant='body-2' color="textSecondary">
                        textSecondary
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent>
            </Card>
        </Container>


    )
}

export default Card_tut