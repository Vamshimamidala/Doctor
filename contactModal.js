let mongoose=require("mongoose")
let contactSchema= new mongoose.Schema({
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
       require:true
   },
   subject:{
    type:String,
    require:true
},
})   
module.exports= mongoose.model("contactUss",contactSchema)