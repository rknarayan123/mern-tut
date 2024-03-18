const express=require('express');
const app=express();
const dotenv=require('dotenv')
const PORT=process.env.PORT || 5000
dotenv.config();
const {chats}=require("./data/data");
app.get('/',(req,res)=>{
    res.send('running sucessfully');
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id);

    const singleChat=chats.find((c)=>c._id===req.params.id);
    res.send(singleChat);

})
app.listen(PORT)