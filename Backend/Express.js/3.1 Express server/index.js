const express = require("express");

const app = express();
const port = 3000; // Specify the port number directly
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})

