require('dotenv').config();
import express from "express"
import bodyParser from "body-parser";
import blog from "./routes/blog";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// add our blog post route to the express server api
app.use('/api', blog)
app.listen(8080)
