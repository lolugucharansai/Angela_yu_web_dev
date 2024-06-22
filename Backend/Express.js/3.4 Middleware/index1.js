import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyparser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.post('/submit',function(req,res){
  console.log(req.body)
  res.send("<h1>Form submitted successfully! Thank YOU !<h1>");

})

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
