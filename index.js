const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
var corsOptions ={
    origin:"http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req,res) =>{
    res.json({message:"welcome to the nasa application."});
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`)
});