import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Input, Button, List } from 'antd'
import { actionCreators } from './store'
import './style.css';
import { DButton } from '../detail/style'
import axios from '../../http.js';
import p1 from '../../statics/images/p1.jpg'
import p2 from '../../statics/images/p2.jpg'
import tx1 from '../../statics/images/tx06.jpg'
import tx2 from '../../statics/images/wz02.png'
// import  p1 from ''
class RecommendDetail extends PureComponent {
    render() {
        const { CommentList } = this.props;
        const style = {
            fontSize: '30px',
        };
        return (
            <div className="yhxq">
                <div className="top">
                    <img className="tx" src={tx1}/>
                    <div className="introduce">
                        <p className="name">前端面试指南</p>
                        <div>
                            <div className="js"><span>24</span><br/><span>关注 ></span></div>
                            <div className="js"><span>46</span><br/><span>粉丝 ></span></div>
                            <div className="js"><span>4</span><br/><span>文章 ></span></div>
                            <div className="js"><span>43543</span><br/><span>字数 ></span></div>
                            <div className="js1"><span>456</span><br/><span>收货喜欢 ></span></div>
                        </div>
                    </div>
                    <button className="gz">+ 关注</button>
                </div>

                <div className="dt">
                    <span className="bel"><i className="iconfont icon-bell" id="bell"></i>动态&nbsp;&nbsp;</span>
                </div>

                <div className="di1">
                    <img className="tx1" src={tx1} />
                    <span className="name1">前端面试指南</span><span className="time1">发表了文章&nbsp;·&nbsp;2019.01.16&nbsp;17:46</span>
                    <p className="det1">wugong发布系统是什么 乞丐版的wugong，可以实现线上集成，编译打包，与发布验证等功能，简单介绍如何使用，拿到需求后切开分支开发，访问后台管理系统的首页，就是下面这个样子。前端同学需要开发某一个需求，第一步，就是点击创建分支按钮，wugong会自动化的创建一个分支，开发人员拿到分支后，把wugong_project_1的前端项目切换到分支上，开发，提交代码到这个分支。
                        <div className="font">
                        <i className="iconfont icon-ai-eye"></i>&nbsp;&nbsp;546
                        <i className="iconfont icon-pinglun"></i>&nbsp;&nbsp;89
                        <i className="iconfont icon-aixin"></i>&nbsp;&nbsp;87343
                        </div>
                    </p>
                    <img src={p1} className="image1" />    
                </div>

                <div className="di2">
                    <img className="tx1" src={tx1} />
                    <span className="name1">前端面试指南</span><span className="time1">关注了作者&nbsp;·&nbsp;2018.09.20&nbsp;07:53</span>
                    <div className="gzzz">
                        <img src={tx2} className="tx2" />
                        <p className="name2">mindwind<br/><span className="det2">写了76869字，被67898人关注，收获767890喜欢</span></p>
                        <button className="gz2">+ 关注</button>
                        <div className="fen"></div>
                        <p className="cxy">程序员，微信公众号：「瞬息之间」</p>
                    </div>
                </div>

                <div className="di3">
                    <img className="tx1" src={tx1} />
                    <span className="name1">前端面试指南</span><span className="time1">喜欢了文章&nbsp;·&nbsp;2018.08.31&nbsp;20:28</span>
                    <p className="name3">程序员的成长法则与进阶攻略<span className="zz">mindwind</span></p>
                    <p className="det3">一直想对过去职业生涯的成长路线做一个总结性思考，并沉淀为一部作品，今天终于完成了。1 从毕业到今天，在程序这条道路上已经走了十多年了，前期在金融、电信行业写写程序，最近七年在互联网行业从事电商应用相关系统的技术工作，也一路从程序员成长为了一名架构师。今天这个时代，对于程序员来说是一个特别幸运的时代。每一个有追求的程序员都希望能获得快速的成长，但成长的道路没那么平坦和舒适，一路上充满了崎岖、障碍和迷雾。</p>
                    <img src={p2} className="image1" />
                </div>
                
            </div>
            // <div className="recommendDetail_wrapper">
            //     <div className="recommendDetail_left"></div>
            //     <div className="recommendDetail_right"></div>
            //     <div className="recommendDetail_center">
            //         <div className="recommendDetail_first">

            //             <p> &nbsp;</p>
            //             <div className="touxiang"></div>
            //             <div className="recommendDetail_first_zhongjian">
            //                 <div className="rec_f_q"> <h3>前端面试指南</h3> </div>
            //                 <div className="jianju">
            //                     <div className="recommendDetail_first_zhongjian_xiaokuai_first">
            //                         <p>24</p>
            //                         <p>关注></p>
            //                         <div className="shugang"></div>
            //                     </div>
            //                     <div className="recommendDetail_first_zhongjian_xiaokuai">
            //                         <p>46</p>
            //                         <p>粉丝</p>
            //                         <div className="shugang"></div>
            //                     </div>
            //                     <div className="recommendDetail_first_zhongjian_xiaokuai">
            //                         <p>2</p>
            //                         <p>文章</p>
            //                         <div className="shugang"></div>
            //                     </div>
            //                     <div className="recommendDetail_first_zhongjian_xiaokuai">
            //                         <p>3658</p>
            //                         <p>字数</p>
            //                         <div className="shugang"></div>
            //                     </div>
            //                     <div className="recommendDetail_first_zhongjian_xiaokuai_last">
            //                         <p>4546</p>
            //                         <p>收获喜欢></p>
            //                     </div>
            //                 </div>
            //             </div>
            //             <DButton>+ 关注</DButton>

            //             <p style={style}> &nbsp;</p>
            //             <img className="tupian" src={p1} alt="图片" />
            //             <div className="ddd"></div>
            //             <p className="ccc">  前端面试指南 <span className="aaa">发表了文章</span> <span className="bbb">01.16 17:40</span> </p>
            //             <article className="art">
            //                 <section className="sec">
            //                 wugong发布系统是什么 乞丐版的wugong，可以实现线上集成，编译打包，与发布验证等功能，简单介绍如何使用，拿到需求后切开分支开发，访问后台管理系统的首页...
            //                 </section>                      
            //             </article>
            //             {/* <img src="../../statics/images/p1.jpg" alt=""/> */}
            //         </div>
            //     </div>
            // </div>
        )
    }
    componentDidMount() {
        // this.bindEvents();
    }
    // bindEvents() {
    //     window.addEventListener("popstate", (e) => {
    //         this.props.reductionPages();
    //     }, false);
    // }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),

})

const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(withRouter(RecommendDetail));//让Detail有能力获取到router里面所有的内容