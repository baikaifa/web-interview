const express = require('express');
const router = express.Router();
const passport = require('passport');
const RecommendList = require('../../models/RecommendList');

router.get("/test", (req, res) => {
    res.json({ msg: 'recommentList works' })
})

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    RecommendList.find()
        .then(recommentList=>{
            if(!recommentList){
                return res.status(404).json("没有任何内容")
            }
            res.json(recommentList);
        }).catch(err => res.status(404).json(err));
})

router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    console.log('1',profileFields);
    new RecommendList(profileFields).save().then(recommentList => {
        res.json(recommentList)
    }).catch(err=>res.json(err));
});

router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.id) { profileFields.id = req.body.id; }
    RecommendList.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(recommentList => res.json(recommentList))
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.params.id);
    console.log('我在删除');
    RecommendList.findOneAndDelete({ _id: req.params.id }).then(recommentList => {
        recommentList.save().then(recommentList => res.json(recommentList))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


