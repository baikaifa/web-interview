import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import  './style.css'
class Zuozhe extends PureComponent {
    render() {
       return (
           <div>
            <div className="top">
                <div className="picture"></div>
                <div className="content">
                    <p className="content-top">前端面试指南</p>
                    <div className="guanzhu">
                    <p className="number">24</p>
                    <p className="title">关注</p>
                    </div>
                    <div className="fensi">
                    <p className="number">46</p>
                    <p className="title">粉丝</p>
                    </div>
                    <div className="wenzhang">
                    <p className="number">2</p>
                    <p className="title">文章</p>
                    </div>
                    <div className="zishu">
                    <p className="number">3658</p>
                    <p className="title">字数</p>
                    </div>
                    <div className="xihuan">
                    <p className="number">5556</p>
                    <p className="title">收获喜欢</p>
                    </div>
                </div>
                <button className="btn">+关注</button>
            </div>
            <div className="center">
                <i className="iconfont icon-ai-eye"></i>
            </div>
           </div>
       )
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Zuozhe);
    