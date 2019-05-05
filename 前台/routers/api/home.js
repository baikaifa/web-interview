const express = require('express');
const router = express.Router();
const Home = require('../../models/Home');

router.get("/home",(req,res)=>{
    Home.find()
        .then(home=>{
            if(!home){
                return res.status(404).json("没有任何内容")
            }
            console.log(home);
            res.json(home);
        }).catch(err => res.status(404).json(err));
})

module.exports = router;