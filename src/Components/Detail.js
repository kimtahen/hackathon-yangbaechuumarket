import React from 'react';
import { Modal, makeStyles, Backdrop, Fade } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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

export default function Detail({title, item, deadline, location, totalEntry, desc, img, timestamp}){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    
    console.log("디테일 데이터", title, img, desc, item, location, deadline, totalEntry, timestamp);


    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Deatail
            </button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{title}</h2>
                        <img src={img}/>
                        <p>{item}</p>
                        <p>{location}</p>
                        <p>{deadline}</p>
                        <p>{totalEntry}</p>
                        <p>{timestamp}</p>
                    </div>
                </Fade>
            </Modal>
        </div>

    );
            }