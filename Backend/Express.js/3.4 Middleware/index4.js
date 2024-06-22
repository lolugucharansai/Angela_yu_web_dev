import express from "express";
import {dirname }from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";

const app = express();
const port = 3000;
const dir_name= dirname(fileURLToPath(import.meta.url));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
        console.log(req.query);
        console.log(req.path);
        res.sendFile(dir_name+"/public/index.html");
})

app.post("/submit",(req,res)=>{
         res.send(`<h1>Your band name is</h1> \n <h2>${req.body.street} ${req.body.pet}</h2>`);
})