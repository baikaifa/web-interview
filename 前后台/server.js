const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser=require('cookie-parser');
const app = express();
const server =require('http').Server(app);
const io=require('socket.io')(server);

io.on('connection',function (socket){
    socket.on('sendmsg',function (data){
        console.log('我发送了数据',data);
        io.emit('recvmsg',data)
    })
})


//引入users.js
const users = require('./routers/api/users');
const profiles = require('./routers/api/profiles');
const headerList = require('./routers/api/headerList');
const detail = require('./routers/api/detail');
const home = require('./routers/api/home');
const homeList = require('./routers/api/homeList');
const topicList = require('./routers/api/topicList');
const articleList = require('./routers/api/articleList');
const recommendList = require('./routers/api/recommendList');
const fourList = require('./routers/api/fourList');
const loadMore = require('./routers/api/loadMore');
//使用body-parser中间件
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//passport初始化   初始化之后才能使用
app.use(passport.initialize());
require('./config/passport')(passport);//在这里引入后直接在config下的passport中写即可
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })
//使用routes
app.use("/api/users", users);
app.use('/api/profiles', profiles);
app.use('/api/headerList', headerList);
app.use('/api/detail', detail);
app.use('/api/home', home);
app.use('/api/homeList', homeList)
app.use('/api/topicList', topicList)
app.use('/api/articleList', articleList)
app.use('/api/fourList', fourList)
app.use('/api/recommendList', recommendList)
app.use('/api/loadMore', loadMore)
const port = process.env.PORT || 5000;
//连接数据库
// var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/houtai' //local表示数据库的名称
// const db=require('./config/keys').mongoURI;
// console.log(db);
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => { console.log('连接成功') })
    .catch(err => console.log(err))
    server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


// const User = mongoose.model('user', new mongoose.Schema({
//     user: { type: String }
// }))
// User.create({
//     name: 'imooc',
//     age: 18
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })


// app.get('/add', function (req, res) {
//     //增加数据
//     MongoClient.connect(url, function (err, client) {
//         //client参数就是连接成功之后的mongoclient(个人理解为数据库客户端)
//         if (err) {
//             console.log(err);
//             console.log('数据库连接失败');
//             return;
//         } else {
//             var db = client.db("houtai");
//             db.collection('user').insertOne({ 'name': 'lisi', "age": 10 }, function (error, result) {
//                 if (error) {
//                     console.log('增加数据失败');
//                     return;
//                 } else {
//                     res.send('增加数据成功');
//                     res.end();
//                 }
//                 // db.close();
//             })
//         }
//     })
// });




/*如何使用mongodb
1安装mongodb cnpm i mongodb --save-dev

2 var MongoClient=require('mongodb').MongoClient
定义url   var url ='mongodb://localhost:27017/test'  连接数据库的地址

3连接数据库
MongoClient.connect(url,function (err,db){

})
4实现增加修改删除
app.get('/add', function (req, res) {
    //增加数据
    MongoClient.connect(url, function (err, client) {
        //client参数就是连接成功之后的mongoclient(个人理解为数据库客户端)
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return;
        } else {
            var db = client.db("houtai");
            db.collection('user').insertOne({ 'name': 'lisi', "age": 10 }, function (error, result) {
                if (error) {
                    console.log('增加数据失败');
                    return;
                } else {
                    res.send('增加数据成功');

                    res.end();
                }
                // db.close();
            })
        }
    })
});
*/
