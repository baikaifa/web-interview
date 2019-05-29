const express = require('express');
const router = express.Router();
const passport = require('passport');
const Detail = require('../../models/Detail');
var ObjectId = require('mongodb').ObjectID

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
    if (req.body.img) { profileFields.img = req.body.img; }
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
    if (req.body.img) { profileFields.img = req.body.img; }
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
let result = [];
router.post("/change", (req, res) => {
    // result.push(req.body.CommentList)
    // console.log(typeof result);
    var once = 0;
    Detail.find()
        .then(detail => {
            if (!detail) {
                return res.status(404).json("没有任何内容")
            }
            if (once == 0) {
                result.push(detail[0].CommentList[0])
            }
            console.log(result);
        }).catch(err => res.status(404).json(err));
    var MongoClient = require('mongodb').MongoClient;
    result.push(req.body.CommentList);
    console.log(result);
    var url = 'mongodb://localhost:27017/';
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("houtai");
        var whereStr = { "_id": ObjectId('5cd01b959f3d58286819063f') };  // 查询条件
        console.log(result);
        var updateStr = { $set: { "CommentList": result } };
        dbo.collection("details").updateOne(whereStr, updateStr, function (err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            db.close();
        });
    });
    res.json('success');
});
router.post("/deleteItem", (req, res) => {
    // result.push(req.body.CommentList)
    // console.log(typeof result);
    console.log(req.body.CommentList);
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("houtai");
        var whereStr = { "_id": ObjectId('5cd01b959f3d58286819063f') };  // 查询条件
        var updateStr = { $set: { "CommentList": req.body.CommentList } };
        dbo.collection("details").updateOne(whereStr, updateStr, function (err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            db.close();
        });
    });
    res.json('success');
});

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Detail.findOneAndDelete({ _id: req.params.id }).then(detail => {
        detail.save().then(detail => res.json(detail))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


