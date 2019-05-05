const express = require('express');
const router = express.Router();
const HomeList = require('../../models/HomeList');

router.get("/homeList",(req,res)=>{
    HomeList.find()
        .then(homeList=>{
            if(!homeList){
                return res.status(404).json("没有任何内容")
            }
            console.log(homeList);
            res.json(homeList);
        }).catch(err => res.status(404).json(err));
})

module.exports = router;