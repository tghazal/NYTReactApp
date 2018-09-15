const controller = require("../controllers/articleController")
const express = require("express");
const router=express.Router();

router.post("/api/articles",function(req,res){
    controller.create(req,res)
    console.log("yeesssssssssss")

})
router.get("/api/articles",function(req,res){
controller.findAll(req,res)
})

router.delete("/api/articles/:id",function(req,res){
    controller.remove(req,res)
    })

module.exports = router;