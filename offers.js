let mongoose=require("mongoose")
let offerSchema= new mongoose.Schema({
   offer:{
       type:String,
       requied:true
   },
   tdesc:{
       type:String,
       requied:true
   },
    
})   
module.exports= mongoose.model("offers",offerSchema)