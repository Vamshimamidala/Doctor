let mongoose=require("mongoose")
let doctorSchema= new mongoose.Schema({
   name:{
       type:String,
       requied:true
   },
   exp:{
       type:Number,
       requied:true
   },
   treatment:{
       type:String,
       requied:true
   },
   hosp:{
       type:String,
       require:true
   },
   status:{
    type:String,
       require:true
   }
   
})   
module.exports= mongoose.model("doctors",doctorSchema)