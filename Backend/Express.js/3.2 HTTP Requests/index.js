import express from 'express'
const port=3000;
const app= express();
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>hello I am baymax</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>I don't Know just find out</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("If you already knew you would not have come here")
})
app.listen(port,()=>{
console.log(`Server started at the port ${port}`);
});