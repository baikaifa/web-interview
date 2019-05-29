//@login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../../models/Profile');
const TopicList = require('../../models/TopicList');
//$route GET api/profiles/test
//@desc 返回请求的json数据
//@access public 接口类型
router.get("/test", (req, res) => {
    res.json({ msg: 'profile works' })
})
//$route GET api/profiles/add
//@desc 创建信息接口
//@access Private 接口类型
router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    new Profile(profileFields).save().then(profile => {
        res.json(profile)
    })
});

//$route GET api/profiles/add
//@desc 获取所有信息
//@access Private

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.find()
        .then(profile => {
            if (!profile) {
                return res.status(404).json("没有任何内容")
            }
            res.json(profile);
        }).catch(err => res.status(404).json(err));
})
//$route GET api/profiles/:id
//@desc 获取所有信息
//@access Private

router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ _id: req.params.id })
        .then(profile => {
            if (!profile) {
                return res.status(404).json("没有任何内容")
            }
            res.json(profile);
        }).catch(err => res.status(404).json(err));
})
//$route GET api/profiles/edit
//@desc 编辑信息接口
//@access Private 接口类型
router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    Profile.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(profile => res.json(profile))
});
//$route GET api/profiles/delete/:id
//@desc 删除信息接口
//@access Private 接口类型
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOneAndDelete({ _id: req.params.id }).then(profile => {
        profile.save().then(profile => res.json(profile))
    })
        .catch(err => res.status(404).json('删除失败'));
})

module.exports = router;


