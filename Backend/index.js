const express = require ('express');
const mongoose =require ('mongoose');
const app = express();
const morgan =require("morgan");
app.use(morgan("dev"));
const puserRoute =require('./router/users');
const projectRoute=require('./router/projects');
const cors =require("cors");
app.use(cors());
app.use(express.json());

mongoose
.connect("mongodb+srv://Sur_y:Eihaa5FgSNxW7HFm@cluster0.svwcz.mongodb.net/freelancer?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("DB Freelancer connected")})
.catch((err)=>{console.log(err)});


app.use("/api/signup",puserRoute);
app.use("/api/project",projectRoute);
app.listen(5000,()=>{console.log('Listening to port 5000')});


