const express = require('express');
const router = express.Router();
const HomeList = require('../../models/HomeList');
const LoadMore = require('../../models/LoadMore');
var result =
{
    "success": true,
    "data": [{
        "id": 5,
        "title": "",
        "desc": "",
        "imgUrl": ""
    }]
}

router.get("/", (req, res) => {
    LoadMore.find()
        .then(loadMore => {
            if (!loadMore) {
                return res.status(404).json("没有任何内容")
            } else {
                result.data=loadMore.slice(req.query.page*5-5,req.query.page*5);
                res.json(result);
            }
        }).catch(err => res.status(404).json(err));
       
})


module.exports = router;