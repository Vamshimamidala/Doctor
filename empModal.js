 let mongoose=require("mongoose")
 let empSchema= new mongoose.Schema({
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
    designation:{
        type:String,
        requied:true
    },
    salary:{
        type:Number,
        require:true
    }
})   
module.exports= mongoose.model("employees",empSchema)