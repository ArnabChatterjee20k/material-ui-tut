import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { Typography } from '@mui/material';

export default function Notes_card({note,handle_delete}) {
    const {title,detail,category,id} = note;

    const delete_event = (e) => {
        console.log("delete event");
        handle_delete(id)
    }

    return (
        <div>
            <Card>
                <CardHeader
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
