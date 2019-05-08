const express = require('express');
const router = express.Router();
const passport = require('passport');
const HeaderList = require('../../models/HeaderList');
const ArticleList = require('../../models/ArticleList');
const queryStringModule = require('querystring');
// import result  from './home'
router.get("/test", (req, res) => {
    console.log('12321');
    res.json(result)
})

router.post("/search",(req,res)=>{
    console.log(req.body.keywords);

    ArticleList.find({"title":req.body.keywords})
    .then(articleList=>{
        if(!articleList){
            return res.status(404).json("没有任何内容")
        }
        res.json(articleList);
    }).catch(err => res.status(404).json(err));


})
// router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
//     const profileFields = {};
//     if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
//     if (req.body.title) { profileFields.title = req.body.title; }
//     if (req.body.desc) { profileFields.desc = req.body.desc; }
//     if (req.body.id) { profileFields.id = req.body.id; }
//     console.log('1',profileFields);
//     new LoadMore(profileFields).save().then(loadMore => {
//         res.json(loadMore)
//     }).catch(err=>res.json(err));
// });
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