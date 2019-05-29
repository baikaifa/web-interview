const express = require('express');
const router = express.Router();
const passport = require('passport');
const Detail = require('../../models/Detail');

router.get("/test", (req, res) => {
    res.json({ msg: 'Detail works' })
})

router.get("/detail", (req, res) => {
    var result={
        "success":true,
        "data":[]
    }
    Detail.find()
        .then(detail=>{
            if(!detail){
                return res.status(404).json("没有任何内容")
            }
            result.data=detail[req.query.id];
             res.json(result);
        }).catch(err => res.status(404).json(err));
})
router.get("/", (req, res) => {

    Detail.find()
        .then(detail=>{
            if(!detail){
                return res.status(404).json("没有任何内容")
            }
             res.json(detail);
        }).catch(err => res.status(404).json(err));
})
router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    if (req.body.DName) { profileFields.DName = req.body.DName; }
    if (req.body.Ddet) { profileFields.Ddet = req.body.Ddet; }
    if (req.body.DArticle) { profileFields.DArticle = req.body.DArticle; }
    if (req.body.inputValue) { profileFields.inputValue = req.body.inputValue; }
    if (req.body.CommentList) { profileFields.CommentList = req.body.CommentList; }
    new Detail(profileFields).save().then(detail => {
        res.json(detail)
    }).catch(err=>res.json(err));
});

router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    if (req.body.DName) { profileFields.DName = req.body.DName; }
    if (req.body.Ddet) { profileFields.Ddet = req.body.Ddet; }
    if (req.body.DArticle) { profileFields.DArticle = req.body.DArticle; }
    if (req.body.inputValue) { profileFields.inputValue = req.body.inputValue; }
    if (req.body.CommentList) { profileFields.CommentList = req.body.CommentList; }
    Detail.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(detail => res.json(detail))
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Detail.findOneAndDelete({ _id: req.params.id }).then(detail => {
        detail.save().then(detail => res.json(detail))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


