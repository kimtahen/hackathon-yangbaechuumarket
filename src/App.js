import React, {useState,useEffect, useRef} from 'react';
import Register from './Components/Register';
import Home from './Components/Home';
import axios from 'axios';


function App() {
    const [content, setcontent] = useState([]);
    const [isfetched, setisfetched] = useState(false);
    const [postid, setpostid] = useState(1);
    let postpullrequest = () =>{
        axios.post('http://localhost:8000/pulldata')
            .then((response)=>{
                setcontent(response);
                setisfetched(true);
                });
    }
    useEffect(()=>{
        postpullrequest();
    },[]);
    return (
        <div className="App">
            {isfetched ? <Home content={content} postid={postid} setpostid={setpostid}/> : <h2>loading wait</h2>}

        </div>
    );
}

export default App;
