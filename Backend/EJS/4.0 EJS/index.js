import express from "express";
const app = express();
const port = 3000;

// Set the view engine to ejs


app.get("/", (req, res) => {
    const date = new Date(); // Recalculate date for each request
    
    let type = "weekday";
    let adv = "keep grinding";
    if (date.getDay() == 0 || date.getDay() == 6) {
        type = "weekend";
        adv = "take a break";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});