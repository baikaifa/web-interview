const express = require('express');
const router = express.Router();
const Home = require('../../models/Home');
const TopicList = require('../../models/TopicList');
const RecommendList = require('../../models/RecommendList');
const ArticleList = require('../../models/ArticleList');
var result = {
    "data": {
        "topicList": [{
            "id": 1,
            "title": "",
            "imgUrl": ""
        }],
        "articleList": [{
            "id": 1,
            "title": "",
            "desc": "",
            "imgUrl": ""
        }],
        "recommendList": [{
            "id": 1,
            "imgUrl": ""
        }]
    },
    "success": true
}
router.get("/home", (req, res) => {
    console.log(result);
    TopicList.find()
        .then(topicList => {
            if (!topicList) {
                return res.status(404).json("没有任何内容")
            }
            console.log(topicList);
         result.data.topicList = topicList;
        }).catch(err => res.status(404).json(err));
    ArticleList.find()
        .then(articleList => {
            if (!articleList) {
                return res.status(404).json("没有任何内容")
            }
            result.data.articleList = articleList;
        }).catch(err => res.status(404).json(err));
    RecommendList.find()
        .then(recommendList => {
            if (!recommendList) {
                return res.status(404).json("没有任何内容")
            }
            result.data.recommendList = recommendList;
            res.json(result);
        }).catch(err => res.status(404).json(err));


})

module.exports = router;