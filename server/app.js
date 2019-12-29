const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 8000
const dbPort = 27017

const connect = require('./schemas/index');
connect(dbPort);

const Post = require('./schemas/post');

app.use(express.static('build'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res,err)=>{
    res.sendFile('index.html');
})


app.post('/pulldata',(req,res,err)=>{
    Post.find({}, (err, posts) =>{
        let post = undefined;
        if (posts.length === 0) post = "서버에 저장된 메시지가 없습니다."
        else post = posts;
        res.json(post);
    })
})
app.post('/pushdata',(req,res,err)=>{
    console.log(req.body.data);
    // const title = req.body.data.title;
    // const item = req.body.data.item;
    // const deadline = req.body.data.deadline;
    // const location = req.body.data.location;
    // const totalEntry = req.body.data.totalEntry;
    // const desc = req.body.data.desc;
    // const img = req.body.data.img;
    //
    // console.log(title, item, deadline, location, totalEntry, desc, img);
    // const post = new Post({title, item, deadline, location, totalEntry, desc, img});
    // post.save(
    //     (err) => {
    //         if (err) res.json({
    //             msg: '서버에 오류가 발생했습니다. 관리자에게 문의해주세요.'
    //         })
    //         else  { Post.find({}, (err, msgs) => {
    //             let msg = undefined
    //             if (msgs.length === 0) msg = "서버에 저장된 메시지가 없습니다."
    //             else msg = msgs
    //
    //             res.json(msg)
    //         })
    //         }
    //     })
})

app.listen(port, () => {
    console.log(port + '번 포트에서 대기중')
})