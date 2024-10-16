const { default: mongoose } = require("mongoose");
let mangoose= require("mongoose");
let studentSchema= new mangoose.Schema({
    name:{
        type:String,
        requied:true
    },
    phone:{
        type:Number,
        requied:true
    },
    email:{
        type:String,
        requied:true
    },
    address:{
        type:String,
        requied:true
    },
})
module.exports= mongoose.model("students",studentSchema)