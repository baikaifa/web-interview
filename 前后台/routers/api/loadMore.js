const express = require('express');
const router = express.Router();
const passport = require('passport');
const LoadMore = require('../../models/LoadMore');

router.get("/test", (req, res) => {
    res.json({ msg: 'LoadMore works' })
})

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    LoadMore.find()
        .then(loadMore=>{
            if(!loadMore){
                return res.status(404).json("没有任何内容")
            }
            res.json(loadMore);
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
    new LoadMore(profileFields).save().then(loadMore => {
        res.json(loadMore)
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
    LoadMore.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(loadMore => res.json(loadMore))
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    LoadMore.findOneAndDelete({ _id: req.params.id }).then(loadMore => {
        loadMore.save().then(loadMore => res.json(loadMore))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


