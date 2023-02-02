const express = require('express')
const router=express.Router();

const List = require('../models/List');

const verify= require('../verifyToken');

// create list---


router.post("/",verify, async (req,res)=>{
    
    if(req.user.isAdmin){

      const newList = new List(req.body);

      try{
        const savedList= await newList.save();

        res.status(201).json(savedList);
      }catch(err){
        res.status(500).json(err);
      }

    }else{
        res.status(403).json("You are not allowed");
    }
})

// delete
router.delete("/:id",verify, async (req,res)=>{
    
    if(req.user.isAdmin){

    
      try{
        await List.findByIdAndDelete(req.params.id);

        res.status(201).json("List has been deleted successfully");
      }catch(err){
        res.status(500).json(err);
      }

    }else{
        res.status(403).json("You are not allowed");
    }
})

// get
router.get("/",verify, async (req,res)=>{

    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let lists= [];
  
      try{
       
        if(typeQuery){

            if(genreQuery){
                lists = await List.aggregate([
                    {$sample :{size :10}},
                    {$match : {type :typeQuery ,genre :genreQuery}}
                ])
            }else{
                lists = await List.aggregate([
                    {$sample :{size :10}},
                    {$match : {type :typeQuery }}
                ])
            }

        }else{
            lists = await List.aggregate([
                {$sample :{size :10}}
            ])
        }

        
        res.status(201).json(lists);
      }catch(err){
        res.status(500).json(err);
      }

})

module.exports =router;