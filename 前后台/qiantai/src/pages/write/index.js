import React, { PureComponent } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeWrapper, HomeRight, LeftWhite, RightWhite } from '../home/style.js'
import  {HomeLeft,NewArticle,NoTitleArticle} from './style.js'
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
                            <span className="jiahao">+</span>
                            <span className="xjwz">新建文章</span>
                            </div>
                            </NewArticle>
                        <NoTitleArticle>
                            <div id="wbtwz">
                            无标题文章
                            </div>
                            <p className="zs">字数 0</p>
                            <div className="shezhi">
                                设置
                            </div>
                        </NoTitleArticle>
                    </HomeLeft>
                    <HomeRight className="homeRgiht">
                        <div className="wbtwz">
                                无标题文章
                        </div>
                        <div className="wbtwz_content">
                            <div className="wbtwz_line">
                        <ul>
                            <li>B</li>
                            <li>U</li>
                            <li>/</li>
                            <li>图片</li>
                            <li>表格</li>
                            <li>笑脸</li>
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