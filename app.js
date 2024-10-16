let express=require("express");
 
require("./dbconfig/dbconn")
let studentRouting=require("./router/studentRouting");
let cors=require("cors");
const empRouting = require("./router/employeesRouting");
const singupRouting = require("./router/singupRouting")
const treatmentRouting=require("./router/treatmentRouting")
const offerRouting=require("./router/OfferRouting");
const bookRouting = require("./router/bookRouting");
 const conactRouting = require("./router/contactRouting");
 const doctorRouting=require("./router/doctorRouting");
let app=express();
app.use(express.json());
app.use(cors())
app.use("/student",studentRouting)
app.use("/employee",empRouting)
app.use("/singup",singupRouting)
app.use("/treatment",treatmentRouting)
app.use("/offer",offerRouting)
app.use("/book",bookRouting)
app.use("/contact",conactRouting)
app.use("/doctor",doctorRouting)
app.listen(4000,()=>{
    console.log("server started")
})