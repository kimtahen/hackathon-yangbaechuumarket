import React from 'react'
import { makeStyles, Modal, Backdrop, Fade } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';


function Post({title, item,deadline,location,totalEntry, desc, timeStamp, img}) {
    const modaluseStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const modalclasses = modaluseStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const useStyles = makeStyles({
        card: {
            width: 345,
        },

        media: {
            height: 140,
            width:345
        },
    });

    const classes = useStyles();

    return(
        <>
        <Card className={classes.card} style={{display:`inline-block`,margin:`1rem`}} onClick={()=>{handleOpen()}}>
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
            <Modal
                className={modalclasses.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={modalclasses.paper}>
                        <h2>{title}</h2>
                        <img src={img}/>
                        <p>{item}</p>
                        <p>{location}</p>
                        <p>{deadline}</p>
                        <p>{totalEntry}</p>
                        <p>{timeStamp}</p>
                    </div>
                </Fade>
            </Modal>

        </>


    )
}
export default Post;