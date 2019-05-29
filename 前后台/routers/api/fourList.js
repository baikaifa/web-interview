const express = require('express');
const router = express.Router();
const passport = require('passport');
const FourList = require('../../models/FourList');

// router.get("/", (req, res) => {
//     res.json({ msg: 'fourList works' })
// })

router.get("/",  (req, res) => {
    FourList.find()
        .then(fourList=>{
            if(!fourList){
                return res.status(404).json("没有任何内容")
            }
            res.json(fourList);
        }).catch(err => res.status(404).json(err));
})

router.post("/add",  (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.id) { profileFields.id = req.body.id; }
    new FourList(profileFields).save().then(fourList => {
        res.json(fourList)
    }).catch(err=>res.json(err));
});

router.post("/edit/:id",  (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.id) { profileFields.id = req.body.id; }
    FourList.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(fourList => res.json(fourList))
});

router.delete("/delete/:id",  (req, res) => {
    FourList.findOneAndDelete({ _id: req.params.id }).then(fourList => {
        fourList.save().then(fourList => res.json(fourList))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


