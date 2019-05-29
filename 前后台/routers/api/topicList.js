const express = require('express');
const router = express.Router();
const passport = require('passport');
const TopicList = require('../../models/TopicList');

router.get("/test", (req, res) => {
    res.json({ msg: 'topicList works' })
})

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    TopicList.find()
        .then(topicList=>{
            if(!topicList){
                return res.status(404).json("没有任何内容")
            }
            res.json(topicList);
        }).catch(err => res.status(404).json(err));
})

router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    new TopicList(profileFields).save().then(topicList => {
        res.json(topicList)
    }).catch(err=>res.json(err));
});

router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    TopicList.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(topicList => res.json(topicList))
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    TopicList.findOneAndDelete({ _id: req.params.id }).then(topicList => {
        topicList.save().then(topicList => res.json(topicList))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


