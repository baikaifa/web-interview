const express = require('express');
const router = express.Router();
const passport = require('passport');
const HeaderList = require('../../models/HeaderList');
const ArticleList = require('../../models/ArticleList');
const queryStringModule = require('querystring');
// import result  from './home'
router.get("/test", (req, res) => {
    res.json(result)
})

router.post("/search",(req,res)=>{
    var words=`${req.body.keywords}`
    ArticleList.find({"title":eval("/"+words+"/g")})
    .then(articleList=>{
        if(!articleList){
            return res.status(404).json("没有任何内容")
        }
        res.json(articleList);
    }).catch(err => res.status(404).json(err));
})

router.get("/headerList",(req,res)=>{
    HeaderList.find()
        .then(headerList=>{
            if(!headerList){
                return res.status(404).json("没有任何内容")
            }
            res.json(headerList);
        }).catch(err => res.status(404).json(err));
})

module.exports = router;