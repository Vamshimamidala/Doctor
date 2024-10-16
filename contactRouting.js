const express = require("express");
let Contact = require("../modal/contactModal")
let conactRouting = express.Router();

    conactRouting.get("/", async(req,res)=>{
 let  contact = await   Contact.find();
 res.send(contact)
})
conactRouting.post("/", async(req,res)=>{
    let contact = new  Contact(req.body);
    let result= await contact.save();
    res.send(result)
   })
   conactRouting.delete("/:id", async(req, res) => {
    let id=req.params.id;
    let contact= await  Contact.deleteOne({_id:id});
    res.send(contact);
});
module.exports=conactRouting;