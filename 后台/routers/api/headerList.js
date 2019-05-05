const express = require('express');
const router = express.Router();
const passport = require('passport');
const HeaderList = require('../../models/HeaderList');

router.get("/test", (req, res) => {
    res.json({ msg: 'headerList works' })
})

router.get("/headerList",(req,res)=>{
    // mockResult={
    //     "success":true,
    //     "data":["高考","区块链","!@","342","sdaf","32423","234d","234","sd","dsaf","sadfzxd","fdga","sdafsd"]
    // }
    // res.json(mockResult);
    // const profileFields = {};
    // profileFields.data=["高考","区块链","!@","342","sdaf","32423","234d","234","sd","dsaf","sadfzxd","fdga","sdafsd"];
    // new HeaderList(profileFields).save().then(headerList => {
    //     res.json(headerList)
    // })
    // console.log('插入成功');
    HeaderList.find()
        .then(headerList=>{
            if(!headerList){
                return res.status(404).json("没有任何内容")
            }
            console.log(headerList);
            res.json(headerList);
        }).catch(err => res.status(404).json(err));
})

module.exports = router;