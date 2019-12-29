import React, { Component,useRef } from 'react';
import { Button, Container, Modal, makeStyles, Backdrop, Fade, Box, styled, TextField } from '@material-ui/core'
import axios from "axios";

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
const useStyles2 = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
}));
const useStyles3 = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
}));
const RegisterContainer = styled(Container)({

});
const RegisterTextField = styled(TextField)({
    width: 500,
});
const DateTextField = styled(TextField)({
    width: 500,
});
const CountTextField = styled(TextField)({

});
const RegisterButton = styled(Button)({
});

export default function Register({}){
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    //const title = useRef();
    let title = "";
    let img = "";
    let desc = "";
    let item = "";
    let location = "";
    let deadline;
    let totalEntry = 0;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChangeOfTitle = event => {
        title = event.target.value;
    }

    const handleOnChangeOfImg = event => {
        img = event.target.value;
    }

    const handleOnChangeOfDesc = event => {
        desc = event.target.value;
    }

    const handleOnChangeOfItem = event => {
        item = event.target.value;
    }

    const handleOnChangeOfLocation = event => {
        location = event.target.value;
    }

    const handleOnChangeOfDeadline = event => {
        deadline = event.target.value;
    }

    const handleOnChangeOfTotalEntry = event => {
        totalEntry = event.target.value;
    }

    const printValues = () => {
        console.log(title, item, deadline, location, totalEntry, desc, img);
    }

    let postpushrequest = (title, item, deadline, location, totalEntry, desc, img) =>{
        axios.post('http://localhost:8000/pushdata',{
            data: {
                title: `${title}`,
                item: `${item}`,
                deadline: `${deadline}`,
                location: `${location}`,
                totalEntry: `${totalEntry}`,
                desc: `${desc}`,
                img: `${img}`
            }
        }).then((response)=>{console.log(response)})
    }
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Register
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                        <h2 id="transition-modal-title">신청 내용 작성</h2>
                        <RegisterContainer>
                            <h3>
                                제목
                            </h3>

                            <RegisterTextField id="titleField" variant="outlined" size="small" onChange={handleOnChangeOfTitle} />
                            <h3>
                                음식 이름
                            </h3>

                            <RegisterTextField variant="outlined" size="small" onChange={handleOnChangeOfItem} />
                            <h3>
                                나눔 날짜
                            </h3>
                            <form className={classes2.container} noValidate>
                                <DateTextField
                                    id="date"
                                    type="date"
                                    size="small"
                                    className={classes2.textField}
                                    onChange={handleOnChangeOfDeadline}
                                />
                            </form>
                            <h3>
                                주소
                            </h3>
                            <RegisterTextField variant="outlined" size="small" onChange={handleOnChangeOfLocation} />

                        </RegisterContainer>
                        <RegisterContainer>
                            <h3>
                                사람 수
                            </h3>
                            <CountTextField
                                id="outlined-number"
                                type="number"
                                variant="outlined"
                                size="small"
                                onChange={handleOnChangeOfTotalEntry}
                            />
                            <h3>
                                설명
                            </h3>
                            <RegisterTextField variant="outlined" size="small" onChange={handleOnChangeOfDesc} />
                            <h3>
                                이미지 파일
                            </h3>
                            <RegisterTextField variant="outlined" size="small" onChange={handleOnChangeOfImg} />
                        </RegisterContainer>
                        <p></p>
                        <Container>
                            <RegisterButton variant="contained" onClick={()=>{postpushrequest(title, item, deadline, location, totalEntry, desc, img)}}>신청</RegisterButton>
                        </Container>
                    </div>
                </Fade>
            </Modal>
        </div>

    );


}