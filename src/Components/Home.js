import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@material-ui/core';
import Logo from './Logo.png';
import Banner from '../Banner.png';
import Post from './Post';
import Register from './Register';
import axios from 'axios';


export default function Home({content, postid, setpostid}){
    const[openedpost, setopenedpost] = useState([]);
    useEffect(()=>{
        let arr = content.data.map((x)=>{
            return <Post id={x.id} title={x.title} item={x.item} deadline={x.deadline} location={x.location} totalEntry={x.totalEntry} desc={x.desc} timeStamp={x.timeStamp} img={x.img}  />
        });
        console.log(arr);
        setopenedpost(arr);

    },[]);

    const useStyles = makeStyles(theme => ({
        wrapDiv: {
            flexGrow: 1,
        },
        logoIcon: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            fontSize: 30,
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.wrapDiv}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:`#7db249`}}>
                    <IconButton edge="start" className={classes.logoIcon}>
                        <img src={Logo} style={{width: 50, height: 50}} />
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                    양배추 마켓에 오신 걸 환영합니다.
                    </Typography>
                    <Register postid={postid} setpostid={setpostid}/>
                </Toolbar>
            </AppBar>
            <Container>
                <img src={Banner} style={{margin: '50px', width: '90%'}} />
            </Container>
            <Container>

                {openedpost}

            </Container>
        </div>
        
    );
}