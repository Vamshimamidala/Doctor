const express = require("express");
let Doctor = require("../modal/doctorModal")
let doctorRouting = express.Router();

doctorRouting.get("/", async(req,res)=>{
 let doctor = await  Doctor.find();
 res.send(doctor)
})

   
   doctorRouting.get("/:tname", async(req,res)=>{
    let tname=req.params.tname;
    let treatment= await Doctor.find({treatment:tname});
    // console.log(treatment);
    res.send(treatment);
   })

doctorRouting.post("/", async(req,res)=>{
    let doctor = new Doctor(req.body);
    let result= await doctor.save();
    res.send(result)
   })

   doctorRouting.delete("/:id", async(req, res) => {
    let id=req.params.id;
    let doctor= await Doctor.deleteOne({_id:id});
    res.send(doctor);
    
});
 
module.exports=doctorRouting;