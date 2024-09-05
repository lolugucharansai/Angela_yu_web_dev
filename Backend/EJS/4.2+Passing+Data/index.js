import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fname = req.body["fname"] || "";
  const lname = req.body["lname"] || "";
  const numletters = fname.length + lname.length;
  console.log(numletters);
  res.render("index.ejs", { numletters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});