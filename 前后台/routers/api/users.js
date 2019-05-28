//@login & register
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');//头像
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport=require('passport');
const User = require('../../models/User');
//$route GET api/users/test
//@desc 返回请求的json数据
//@access public 接口类型
// router.get("/test", (req, res) => {
//   res.json({ msg: 'login works' })
// })
//$route POST api/users/test
//@desc 返回请求的json数据
//@access public 接口类型
router.get('/getUser',passport.authenticate('jwt',{session:false}),(req,res)=>{
  res.send('我是user')
})
router.post("/register", (req, res) => {
  //查询数据库中是否拥有邮箱
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.json( "邮箱已被注册！")
      } else {
        const avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' })//404是报错mm是头像
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          //gravatar cnpm i gravatar
          password: req.body.password,
          identity:req.body.identity
        })
        //加密安装 cnpm install bcrypt
        bcrypt.genSalt(10, function (err, salt) {//10是加密的模式
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) {
              throw err;
            } else {
              console.log('加密');
              newUser.password = hash;///hash就是加密后的密码
              newUser.save()//调用存储方法
                .then(user => res.json(user))
                .catch(err => console.log(err))
                res.json("注册成功")
            }
          });
        });
      }
    }).catch(() => {
      console.log('查询出错');
    })
})
router.get("/login", (req, res) => {
  console.log(req.cookies);
  const {userEmail}=req.cookies;
  res.json(userEmail);
})
//$route POST api/users/login
//@desc 返回token jwt passport
//@access public 接口类型
router.post("/login", (req, res) => {
  // res.cookie('userEmail',req.body.email)
  res.cookie('userEmail',req.body.email,{maxAge:24*3600*1000});
  const email = req.body.email;
  const password = req.body.password;
  //查询数据库
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.json('用户不存在');
        // return res.status(404).json("!" );
      }
      //密码匹配
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            //安装token cnpm i jsonwebtoken
            const rule = 
            { id: user.id, 
              name: user.name,
              avatar:user.avatar,
              identity:user.identity
             };
            jwt.sign(rule, keys.secretOrKey, { expiresIn: 72000000 }, (err, token) => {
              if (err) {
                throw err;
              } else {
                res.json({
                  success: true,  
                  token: "Bearer " + token
                })
              }
            })
            // jwt.sign("规则","加密名字","过期时间","箭头函数")
            // res.json({ msg: "success" });
          } else {
            res.json('密码错误');
            // return res.status(400).json( "密码错误!" );
          }
        })
    })
})
//$route GET api/users/current
//@desc return current user
//@access Private
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
  //安装passport-jwt cnpm i passport-jwt passport
  res.json({
      id:req.user.id,
      name:req.user.name,
      email:req.user.email,
      identity:req.user.identity
  });
})
module.exports = router;


