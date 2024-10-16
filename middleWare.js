let jwt = require("jsonwebtoken");
let middleware =(req,res,next)=>{

    let token = req.header("A-token");
    if(!token){
        res.send("Token not found");

    }
    let decode= jwt.verify(token,"vamshi@123");
    req.user= decode.user;
    next()
}
module.exports = middleware;