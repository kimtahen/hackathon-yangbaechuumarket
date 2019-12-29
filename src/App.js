import React, {useState,useEffect, useRef} from 'react';
import Register from './Components/Register';
import axios from 'axios';


function App() {
    const [contents, setcontent] = useState([]);
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

    const [msg, setmsg] = useState(null);
    return (
        <div className="App">
            <Register/>
        </div>
    );
}

export default App;
