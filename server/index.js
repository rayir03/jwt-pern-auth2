const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(express.json()) //req.body
app.use(cors())

//ROUTES


app.listen(3003, () => {
    console.log("Server is running on port 3003");
});