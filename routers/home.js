const express=require("express");
const router=express.Router();
const fs=require("fs")
let info;
router.get("/",function(req,res){
    fs.readFile("./product.json","utf8",function(err,file){
        info=JSON.parse(file);
        res.render("pages/home",{info});
        if(err){
            console.log("something went wrong");
            
        }
    })
})
module.exports=router;