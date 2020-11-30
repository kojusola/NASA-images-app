const mongoose = require(mongoose);
mongoose.connect("mongodb://localhost:27017/woootlab", {useUnifiedTopology: true, useNewUrlParser:true}, (err) =>{ 
    if(!err){
        console.log("success connecting")
    }
    if (err){
        console.log("Error connecting to database")
    }
})
