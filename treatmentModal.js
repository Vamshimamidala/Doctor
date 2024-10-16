let mongoose=require("mongoose")
let treatmentSchema= new mongoose.Schema({
   tname:{
       type:String,
       requied:true
   },
   tdesc:{
       type:String,
       requied:true
   },
    
})   
module.exports= mongoose.model("treatments",treatmentSchema)