import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

function Post({title, item, timeStamp, img}) {

    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
        },

        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return(
        <>

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}

                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item}
                        <br></br>
                        {timeStamp}
                    </Typography>

                </CardContent>
            </CardActionArea>

        </Card>
        </>


    )
}
export default Post;