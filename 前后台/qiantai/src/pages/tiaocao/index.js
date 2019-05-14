import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import  './style.css'
class Tiaocao extends PureComponent {
    render() {
            return (
         <div>
              <div className="top">
              
                <div className="top1">
                 <div className="picture"></div>
                 <div className="name">dsdqvj</div>
                 {/* <div className="time">2个月前</div> */}
                </div>
                <div className="title">前端跳槽面试必备技巧，从面试准备，到一、二、三终面真实面试的终极分析教程</div>
                <div className="content">……12套JAVA高级面试课程，BAT高级面试，架构师面试，高级工程师面试，
                 第十套：【前端面试】前端跳槽面试必备技巧，从面试准备，到一、二、三、终面真实面试的完整分析课程 
                 第十一套：【高级面试】揭秘一线互联网企业 前端JavaScript高级面试视频课程 第十二套：【高级面试】
                 MySQL面试指南-中高级IT开发人员晋升加薪的必备佳品视频课程……（只为冲高薪准备） 总目录：12套JAVA
                 高级面试课程，BAT高级面试，架构师面试，高级工程师面试，java就业面试，校招面试，算法面试，mysql
                 数据库面试，前端面试宝典，笔试题，就业指导笔记，企业级……</div>
                 <div className="font">
                    <i className="iconfont icon-ai-eye"></i><span>469</span>
                    <i className="iconfont icon-pinglun"></i><span>33</span>
                    <i className="iconfont icon-xin"></i><span>679</span>
                </div>
              </div>
              {/* <i className="iconfont icon-eye"></i> */}
              <div className="center">
                <div>
                 <div className="picture"></div>
                 <div className="name">Dmz社区—_前端C</div>
                </div>
                <div className="title">前端跳槽面试必备技巧</div>
                <div className="content">…… 描述在一面/二面要掌握什么技巧，根据前端的知识点划分并分别出一至
                两道面试题，根据真实面试的发问方式进行考察，并给出对应知识点的讲解、代码演示以及注意事项。 第4章 
                二面/三面 二面/三面更侧重于对前端……第1章 课程介绍 很多同学对面试不够了解，不知道如何准备，对面试环
                节的设置以及目的不够了解，因此成功率不高。通常情况下校招生面试的成功率低于1%，而社招的面试成功率也
                低于5%，所以对于候选人一定要……知道设立面试的初衷以及每个环节的意义，有的放矢... 第2章 面试准备 
                </div>
                <div className="font">
                    <i className="iconfont icon-ai-eye"></i><span>469</span>
                    <i className="iconfont icon-pinglun"></i><span>33</span>
                    <i className="iconfont icon-xin"></i><span>679</span>
                </div>
             </div>
             <div className="bottom"> 
             <div>
                 <div className="picture"></div>
                 <div className="name">木易杨说</div>
                </div>
                <div className="title">2018年底的前端跳槽潮中面试官希望看到什么亮点？</div>
                <div className="content">……最近两三个月，我大概收到几十份前端简历了，其中绝大部分都没提交到内推系统。
                因为我总结出一个蚂蚁内推定律(P6及以上): 觉得有可能过不了的简历，肯定过不了。 觉得一定过得了的简历，
                可能过不了。 所以……办法，这几年从业前端的人越来越多，而坑位总是有限的，自然而然会将整体门槛拔高。
                同样一份简历，他们就是更有竞争力。学历好证明学习能力强，履历好证明工作能力OK。当然不是说出身不好的
                就一定没希望了，你得有……或者一些知名框架or库的源码解析之类，也能让面试官感受你在技术深度上的探索与挖掘
                。 项目/工作经历中最重要的是自己拿到了什么样的结果，而不是实现了什么样的功能。很多同学写项目经历，都会
                写自己开发的产品有……
                </div>
                <div className="font">
                    <i className="iconfont icon-ai-eye"></i><span>469</span>
                    <i className="iconfont icon-pinglun"></i><span>33</span>
                    <i className="iconfont icon-xin"></i><span>679</span>
                </div>
             </div>
         </div>
            )}
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Tiaocao);