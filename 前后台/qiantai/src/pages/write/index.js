import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeWrapper, HomeRight, LeftWhite, RightWhite } from '../home/style.js'
import  {HomeLeft,NewArticle,NoTitleArticle} from './style.js'
class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        if (loginStatus) {
            return (
                <HomeWrapper>
                    <HomeLeft>
                        <NewArticle>新建文章</NewArticle>
                        <NoTitleArticle>无标题文章</NoTitleArticle>
                    </HomeLeft>
                    <HomeRight>
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