let mongoose=require("mongoose")
let bookSchema= new mongoose.Schema({
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
    requied:true
},
status:{
    type:String,
    requied:true
},
})   
module.exports= mongoose.model("bookappoinments",bookSchema)