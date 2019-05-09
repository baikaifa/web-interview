import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeWrapper, HomeRight, LeftWhite, RightWhite } from '../home/style.js'
import  {HomeLeft,NewArticle,NoTitleArticle} from './style.js'
import  './style.css'
class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        if (loginStatus) {
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
                            <div className="wbtwz">
                            无标题文章
                            </div>
                            <p>字数 0</p>
                        </NoTitleArticle>
                    </HomeLeft>
                    <HomeRight className="homeRgiht">
                        456
                    </HomeRight>
                    <LeftWhite></LeftWhite>
                    <RightWhite></RightWhite>
                </HomeWrapper>
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write);