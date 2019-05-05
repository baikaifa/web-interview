const express = require('express');
const router = express.Router();
const Detail = require('../../models/Detail');

router.get("/detail",(req,res)=>{
    Detail.find()
        .then(detail=>{
            if(!detail){
                return res.status(404).json("没有任何内容")
            }
            console.log(detail);
            res.json(detail);
        }).catch(err => res.status(404).json(err));
})

module.exports = router;