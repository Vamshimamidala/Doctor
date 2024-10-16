const express = require("express");
let TreatMent = require("../modal/treatmentModal")
let treatmentRouting = express.Router();

    treatmentRouting.get("/", async(req,res)=>{
 let treatment = await  TreatMent.find();
 res.send(treatment)
})

   treatmentRouting.get("/:tname", async(req,res)=>{
     let tname=req.params.tname;
     let treatment= await TreatMent.find({tname:tname});
    //  console.log(treatment);
     res.send(treatment);
    })
treatmentRouting.post("/", async(req,res)=>{
    let treatment = new TreatMent(req.body);
    let result= await treatment.save();
    res.send(result)
   })
   treatmentRouting.delete("/:id", async(req, res) => {
    let id=req.params.id;
    let treatment= await TreatMent.deleteOne({_id:id});
    res.send(treatment);
});
module.exports=treatmentRouting;