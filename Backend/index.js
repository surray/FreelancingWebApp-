const express = require ('express');
const mongoose =require ('mongoose');
const app = express();
const path =require('path');
const morgan =require("morgan");
app.use(morgan("dev"));
const puserRoute =require('./router/users');
const projectRoute=require('./router/projects');
const cors =require("cors");
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config();
mongoose
.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("DB Freelancer connected")})
.catch((err)=>{console.log(err)});


app.use("/api/signup",puserRoute);
app.use("/api/project",projectRoute);
app.listen(process.env.PORT || 5000,()=>{console.log('Listening to port 5000')});
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

