import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import './style.css'
import $ from 'jquery';
import { Button } from 'antd'
class Tiaocao extends PureComponent {
    render() {
        return (
            <div>
                <div className="tiaocao_left">
                <p></p>
                    <ul>
                        <li><a className="a"><Button className="button_style"> 文章 ></Button></a></li>
                        <li><a className="b"><Button className="button_style"> 用户 ></Button></a></li>
                        <li><a className="c"><Button className="button_style"> 专题 ></Button></a></li>
                        <li><a className="d"><Button className="button_style"> 文集 ></Button></a></li>
                    </ul>
                </div>
                <div className="firstPage">
                    <div className="ffor">
                        <div className="head">
                            <img className="tx" src="https://upload.jianshu.io/users/upload_avatars/1892242/79495352be51?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" />
                            <span className="zuozhe">dsdq0586</span>
                            <span className="time">2个月前</span>
                        </div>
                        <div className="nr">
                            <p className="title">前端跳槽面试必备技巧，从面试准备，到一、二、三终面真实面试的终极分析教程</p>
                            <p className="js">
                                ……12套JAVA高级面试课程，BAT高级面试，架构师面试，高级工程师面试，第十套：【前端面试】前端跳槽面试必备技巧，从面试准备，到一、二、三、终面真实面试的完整分析课程第十一套：【高级面试】揭秘一线互联网企业 前端JavaScript高级面试视频课程 第十二套：【高级面试】 MySQL面试指南-中高级IT开发人员晋升加薪的必备佳品视频课程……（只为冲高薪准备） 总目录：12套JAVA高级面试课程，BAT高级面试，架构师面试，高级工程师面试，java就业面试，校招面试，算法面试，mysql数据库面试，前端面试宝典，笔试题，就业指导笔记，企业级……
                            </p>
                        </div>
                        <div className="font">
                            <i className="iconfont icon-ai-eye"></i><span>469</span>
                            <i className="iconfont icon-pinglun"></i><span>33</span>
                            <i className="iconfont icon-aixin"></i><span>679</span>
                        </div>
                    </div>
                    <div className="ffor">
                        <div className="head">
                            <img className="tx" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" />
                            <span className="zuozhe">Dmz社区—_前端C</span>
                            <span className="time">3个月前</span>
                        </div>
                        <div className="nr">
                            <p className="title">前端跳槽面试必备技巧</p>
                            <p className="js">
                                …… 描述在一面/二面要掌握什么技巧，根据前端的知识点划分并分别出一至两道面试题，根据真实面试的发问方式进行考察，并给出对应知识点的讲解、代码演示以及注意事项。 第1章 课程介绍 很多同学对面试不够了解，不知道如何准备，对面试环节的设置以及目的不够了解，因此成功率不高。通常情况下校招生面试的成功率低于1%，而社招的面试成功率也低于5%，所以对于候选人一定要……知道设立面试的初衷以及每个环节的意义，有的放矢... 第2章 面试准备 通常情况下校招生面试的成功率低于1%，而社招的面试成功率也低于5%，所以对于候选人一定要……知道设立面试的初衷以及每个环节的意义
                            </p>
                        </div>
                        <div className="font">
                            <i className="iconfont icon-ai-eye"></i><span>469</span>
                            <i className="iconfont icon-pinglun"></i><span>33</span>
                            <i className="iconfont icon-aixin"></i><span>679</span>
                        </div>
                    </div>
                    <div className="ffor">
                        <div className="head">
                            <img className="tx" src="https://upload.jianshu.io/users/upload_avatars/14932828/ed5e9dca-fad7-4f9c-b52e-67cf2eb86daf?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" />
                            <span className="zuozhe">木易杨说</span>
                            <span className="time">3个月前</span>
                        </div>
                        <div className="nr">
                            <p className="title">2019年的前端跳槽潮中面试官希望看到什么亮点？</p>
                            <p className="js">
                            ……最近两三个月，我大概收到几十份前端简历了，其中绝大部分都没提交到内推系统。因为我总结出一个蚂蚁内推定律(P6及以上): 觉得有可能过不了的简历，肯定过不了。 觉得一定过得了的简历，可能过不了。 所以……办法，这几年从业前端的人越来越多，而坑位总是有限的，自然而然会将整体门槛拔高。同样一份简历，他们就是更有竞争力。学历好证明学习能力强，履历好证明工作能力OK。当然不是说出身不好的就一定没希望了，你得有……或者一些知名框架or库的源码解析之类，也能让面试官感受你在技术深度上的探索与挖掘。 项目/工作经历中最重要的是自己拿到了什么样的结果，而不是实现了什么样的功能。很多同学写项目经历，都会写自己开发的产品有……
                            </p>
                        </div>
                        <div className="font">
                            <i className="iconfont icon-ai-eye"></i><span>469</span>
                            <i className="iconfont icon-pinglun"></i><span>33</span>
                            <i className="iconfont icon-aixin"></i><span>679</span>
                        </div>
                    </div>
                </div>
                <div className="secondPage">
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试<br />
                            <span className="desc">写了4353543字，获得了4533个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/7640286/d556dba4-2199-40fd-8a27-653bbc8d8194?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">写了45353字，获得了5653个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端达人<br />
                            <span className="desc">写了75434字，获得了6543个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/1892242/79495352be51?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端<br />
                            <span className="desc">写了7435字，获得了5432个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/14932828/ed5e9dca-fad7-4f9c-b52e-67cf2eb86daf?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试<br />
                            <span className="desc">写了4353543字，获得了4533个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/7640286/d556dba4-2199-40fd-8a27-653bbc8d8194?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">写了45353字，获得了5653个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端达人<br />
                            <span className="desc">写了75434字，获得了6543个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="touxiang" src="https://upload.jianshu.io/users/upload_avatars/1892242/79495352be51?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端<br />
                            <span className="desc">写了7435字，获得了5432个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                </div>
                <div className="thirdPage">
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/14932828/ed5e9dca-fad7-4f9c-b52e-67cf2eb86daf?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试<br />
                            <span className="desc">收录768679篇文章，获得了4533个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/7640286/d556dba4-2199-40fd-8a27-653bbc8d8194?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">收录7869篇文章，获得了5653个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端达人<br />
                            <span className="desc">收录9870篇文章，获得了6543个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/1892242/79495352be51?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端<br />
                            <span className="desc">收录9087篇文章，获得了5432个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/14932828/ed5e9dca-fad7-4f9c-b52e-67cf2eb86daf?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试<br />
                            <span className="desc">收录768679篇文章，获得了4533个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/7640286/d556dba4-2199-40fd-8a27-653bbc8d8194?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">收录7869篇文章，获得了5653个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/4385739/6a06dc37-60f7-4f77-985d-9e383824b0df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端达人<br />
                            <span className="desc">收录9870篇文章，获得了6543个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <img className="zhuanti" src="https://upload.jianshu.io/users/upload_avatars/1892242/79495352be51?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"/>
                        <p className="author">
                            前端<br />
                            <span className="desc">收录9087篇文章，获得了5432个喜欢</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                </div>
                <div className="forthPage">
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端<br />
                            <span className="desc">共8970篇文章，7097人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">共54367篇文章，24565人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端跳槽技巧<br />
                            <span className="desc">共8970篇文章，7097人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            面试准备<br />
                            <span className="desc">共56334篇文章，4242人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端<br />
                            <span className="desc">共8970篇文章，7097人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端面试指南<br />
                            <span className="desc">共54367篇文章，24565人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            前端跳槽技巧<br />
                            <span className="desc">共8970篇文章，7097人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                    <div className="for">
                        <div className="wenji">
                            <i className="iconfont icon-zhuantitu" id="wj"></i>
                        </div>
                        <p className="author">
                            面试准备<br />
                            <span className="desc">共56334篇文章，4242人关注</span>
                        </p>
                        <button className="guanzhu">+ 关注</button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $(function () {
            $('.a').click(function () {
                $('.firstPage').css('display', 'block');
                $('.secondPage').css('display', 'none');
                $('.thirdPage').css('display', 'none');
                $('.forthPage').css('display', 'none');
            })
            $('.b').click(function () {
                $('.firstPage').css('display', 'none');
                $('.secondPage').css('display', 'block');
                $('.thirdPage').css('display', 'none');
                $('.forthPage').css('display', 'none');
            })
            $('.c').click(function () {
                $('.firstPage').css('display', 'none');
                $('.secondPage').css('display', 'none');
                $('.thirdPage').css('display', 'block');
                $('.forthPage').css('display', 'none');
            })
            $('.d').click(function () {
                $('.firstPage').css('display', 'none');
                $('.secondPage').css('display', 'none');
                $('.thirdPage').css('display', 'none');
                $('.forthPage').css('display', 'block');
            })
        })
    }
}

export default connect(null, null)(Tiaocao);