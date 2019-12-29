import React, {useState,useEffect, useRef} from 'react';
import Register from './Components/Register';
import Detail from './Components/Detail';
import axios from 'axios';


function App() {
    const [contents, setcontent] = useState([]);
    const [postid, setpostid] = useState(1);
    let postpullrequest = () =>{
        axios.post('http://localhost:8000/pulldata').then((response)=>{setcontent(response);console.log(response)});

    }
    let postpushrequest = (msg) =>{
        axios.post('http://localhost:8000/pushdata',{
            data: {
                msg: `${msg}`
            }
        }).then((response)=>{console.log(response)})
    }
    useEffect(()=>{
        postpullrequest();
    },[]);
    return (
        <div className="App">
            <Register postid={postid} setpostid={setpostid}/>
            <Detail />
        </div>
    );
}

export default App;
