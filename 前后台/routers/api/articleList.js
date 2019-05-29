const express = require('express');
const router = express.Router();
const passport = require('passport');
const ArticleList = require('../../models/ArticleList');

router.get("/test", (req, res) => {
    res.json({ msg: 'articleList works' })
})

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    ArticleList.find()
        .then(articleList=>{
            if(!articleList){
                return res.status(404).json("没有任何内容")
            }
            res.json(articleList);
        }).catch(err => res.status(404).json(err));
})

router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.id) { profileFields.id = req.body.id; }
    if (req.body.Like) { profileFields.Like = req.body.Like; }
    if (req.body.Comment) { profileFields.Comment = req.body.Comment; }
    if (req.body.inputValue) { profileFields.inputValue = req.body.inputValue; }
    if (req.body.CommentList) { profileFields.CommentList = req.body.CommentList; }
    new ArticleList(profileFields).save().then(articleList => {
        res.json(articleList)
    }).catch(err=>res.json(err));
});

router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.id) { profileFields.id = req.body.id; }
    if (req.body.Like) { profileFields.Like = req.body.Like; }
    if (req.body.Comment) { profileFields.Comment = req.body.Comment; }
    if (req.body.inputValue) { profileFields.inputValue = req.body.inputValue; }
    if (req.body.CommentList) { profileFields.CommentList = req.body.CommentList; }
    console.log(profileFields);
    ArticleList.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(articleList => res.json(articleList))
    .catch(err=>res.json('编辑失败'))
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    ArticleList.findOneAndDelete({ _id: req.params.id }).then(articleList => {
        articleList.save().then(articleList => res.json(articleList))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


