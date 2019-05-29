import React, { PureComponent } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import  {HomeLeft,NewArticle,NoTitleArticle,HomeWrapper, HomeRight, LeftWhite, RightWhite} from './style.js'
import  './style.css'
class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        // if (loginStatus) {
            return (
                <HomeWrapper>
                    <HomeLeft className="homeLeft">
                        <NewArticle>
                            <div className="jiahao_xjwz">
                            <span className="xjwz"><i className="iconfont icon-jiahao"></i>新建文章</span>
                            </div>
                        </NewArticle>
                        <NoTitleArticle>
                            <div id="left">
                            <p id="wbtwz">无标题文章<br />
                            <span className="zs"><i className="iconfont icon-icon_article"></i>字数 0</span>
                            <span className="set"><i className="iconfont icon-set-s"></i></span>
                            </p>
                            </div>
                        </NoTitleArticle>
                    </HomeLeft>
                    <HomeRight className="homeRgiht">
                        <div className="wbtwz">
                            <p>无标题文章</p>
                        </div>
                        <div className="wbtwz_content">
                            <div className="wbtwz_line">
                        <ul>
                            <li><i className="iconfont icon-jiacu"></i></li>
                            <li><i className="iconfont icon-Underline"></i></li>
                            <li>/</li>
                            <li><i className="iconfont icon-fl-tupian"></i></li>
                            <li><i className="iconfont icon-biaoge"></i></li>
                            <li><i className="iconfont icon-biaoqing"></i></li>
                        </ul>
                            </div>
                        </div>
                    </HomeRight>
                    <LeftWhite></LeftWhite>
                    <RightWhite></RightWhite>
                </HomeWrapper>
            )}
    //     } else {
    //         return <Redirect to='/login' />
    //     }
    // }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write);