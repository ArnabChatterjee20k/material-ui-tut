import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

import { Avatar } from '@mui/material';
export default function Notes_card({note,handle_delete}) {
    const {title,detail,category,id} = note;
    const colors = {
        personal:"#f57c00",
        work:"goldenrod",
        school:"green",
        code:"red",
        other:"purple"
    }
    // using makestyles to change the border accordingly
    const useStyle = makeStyles({
        card_border:{
            border:()=> `2px solid ${colors[category]}`
        }
    })

    const delete_event = (e) => {
        console.log("delete event");
        handle_delete(id)
    }

    const classes = useStyle()
    return (
        <div>
            <Card className={classes.card_border} elevation={1}>
                <CardHeader
                avatar={
                    <Avatar sx={{bgcolor:colors[category]}}>
                        {category[0].toUpperCase()}
                    </Avatar>
                }
                    action={
                        <IconButton onClick={delete_event}>
                            <Delete />
                        </IconButton>
                    }
                    title={title}
                    subheader={category}
                />
                <CardContent>
                    <Typography variant='body-2' color="textSecondary">
                        {detail}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
