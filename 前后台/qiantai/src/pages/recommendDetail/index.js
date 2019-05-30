import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Input, Button, List } from 'antd'
import { actionCreators } from './store'
import './style.css';
import { DButton } from '../detail/style'
import axios from '../../http.js';
import p1 from '../../statics/images/p1.jpg'
// import  p1 from ''
class RecommendDetail extends PureComponent {
    render() {
        const { CommentList } = this.props;
        const style = {
            fontSize: '30px',
        };
        return (
            <div className="recommendDetail_wrapper">
                <div className="recommendDetail_left"></div>
                <div className="recommendDetail_right"></div>
                <div className="recommendDetail_center">
                    <div className="recommendDetail_first">

                        <p> &nbsp;</p>
                        <div className="touxiang"></div>
                        <div className="recommendDetail_first_zhongjian">
                            <div className="rec_f_q"> <h3>前端面试指南</h3> </div>
                            <div className="jianju">
                                <div className="recommendDetail_first_zhongjian_xiaokuai_first">
                                    <p>24</p>
                                    <p>关注></p>
                                    <div className="shugang"></div>
                                </div>
                                <div className="recommendDetail_first_zhongjian_xiaokuai">
                                    <p>46</p>
                                    <p>粉丝</p>
                                    <div className="shugang"></div>
                                </div>
                                <div className="recommendDetail_first_zhongjian_xiaokuai">
                                    <p>2</p>
                                    <p>文章</p>
                                    <div className="shugang"></div>
                                </div>
                                <div className="recommendDetail_first_zhongjian_xiaokuai">
                                    <p>3658</p>
                                    <p>字数</p>
                                    <div className="shugang"></div>
                                </div>
                                <div className="recommendDetail_first_zhongjian_xiaokuai_last">
                                    <p>4546</p>
                                    <p>收获喜欢></p>
                                </div>
                            </div>
                        </div>
                        <DButton>+ 关注</DButton>

                        <p style={style}> &nbsp;</p>
                        <img className="tupian" src={p1} alt="图片" />
                        <div className="ddd"></div>
                        <p className="ccc">  前端面试指南 <span className="aaa">发表了文章</span> <span className="bbb">01.16 17:40</span> </p>
                        <article className="art">
                            <section className="sec">
                            wugong发布系统是什么 乞丐版的wukong，可以实现线上集成，编译打包，与发布验证等功能，简单介绍如何使用，拿到需求后切开分支开发，访问后台管理系统的首页...
                            </section>                      
                        </article>
                        {/* <img src="../../statics/images/p1.jpg" alt=""/> */}
                    </div>

                    {/* <div className="recommendDetail_second">
                        2
                    </div>
                    <div className="recommendDetail_third">
                        3
                    </div>
                    <div className>
                        4
                    </div>  */}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener("popstate", (e) => {
            this.props.reductionPages();
        }, false);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),

})

const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(withRouter(RecommendDetail));//让Detail有能力获取到router里面所有的内容