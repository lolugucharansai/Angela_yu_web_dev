import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

function get_password(req, res, next){
   req.password_u = req.body["password"];
   next();
}

app.use(get_password);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.password_u == "ILovePrograming"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname+ "/public/index.html");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});