import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
// import Writer from './components/Writer';
import Interview from './components/Interview';
import { actionCreators } from './store';
import { HomeWrapper, HomeLeft, HomeRight,LeftWhite,RightWhite } from './style'
import { BackTop } from './style';
// import axios from 'axios';
// import { Carousel } from 'antd';
import './style.css'
class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {

        return (
            <HomeWrapper>
                <HomeLeft>
                    {/* <Carousel className="carousel"  effect="fade">
                        <div><h3>123u213oi21uo3iu21oiuo</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel> */}

                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                    {/* <Recommend /> */}
                    <Interview/>
                    <Recommend />
                </HomeRight>
                <LeftWhite></LeftWhite>
                <RightWhite></RightWhite>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();

    }
    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);