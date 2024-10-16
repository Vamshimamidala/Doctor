const express = require("express");
let Book= require("../modal/bookModal")
let bookRouting = express.Router();

bookRouting.get("/", async(req,res)=>{
    let  book = await  Book.find();
    res.send(book)
   })
   bookRouting.post("/", async(req,res)=>{
       let book = new Book(req.body);
       let result= await book.save();
       res.send(result)
      })
      bookRouting.delete("/:id", async(req, res) => {
       let id=req.params.id;
       let book= await Book.deleteOne({_id:id});
       res.send(book);
   });
   module.exports=bookRouting;