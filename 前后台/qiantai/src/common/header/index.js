import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    SearchInfo,
    SearchInfoTitle,
    SearChInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Button,
    SearchWrapper
} from './style.js'
import  './index.css'
class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage, handleSearch } = this.props;
        const newList = list.toJS();//List是一个immutable对象，转换为js数组
        const pageList = [];
        if (newList.length) {
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                // <div className="container">
                //         <div className="leftWhite"></div>
                //         <div className="leftContent"></div>
                //         <div className="rightContent"></div>
                //         <div className="rightWhite"></div>
                // </div>
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                <SearChInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            {/* <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i> */}
                            换一批</SearChInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList >
                        {
                            pageList.map((item, index) => (
                                <a key={index} onClick={() => handleSearch(item)}>{item}</a>
                                // <li key={index} onClick={() => handleSearch(item)}>{item}</li>
                            ))
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            
            <HeaderWrapper>
                <Nav>
                    <NavItem className="logo">前端面试指南</NavItem>
                    <Link to='/'> <NavItem className='left active' >发现</NavItem></Link>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <Link to='./register'>
                        <NavItem className='reg'>注册</NavItem>
                    </Link>
                    <NavItem className='right'>
                        <i className="iconfont icon-Aa"></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='./write'>
                        <Button className="writting">
                            写文章
                        </Button>
                    </Link>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleSearch(item) {
            dispatch(actionCreators.searchItem(item));
        },
        handleChangePages(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        handleChangePage(page, totalPage, spin) {
            // const originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            // if(originAngle){
            //     originAngle = parseInt(originAngle,10);
            // }else{
            //     originAngle = 0;
            // }
            // spin.style.transform='rotate('+(originAngle+360)+')';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);