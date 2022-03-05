const express = require("express");
require('dotenv').config()
const getMetaDetaRoute = require("./routes/getMetaDeta");

const port = process.env.PORT;

const app = express();



app.use(express.json());

app.use("/get-meta-data", getMetaDetaRoute);


app.listen(port, ()=>
    console.log(`serve is running on port ${port}`)
)