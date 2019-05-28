import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// 
import { DetailWrapper, Header, DImg, DTop, Ddet, DName, DButton, DArticle, Content } from './style.js'
import { actionCreators } from './store'
import { reductionPageAction } from '../home/store/actionCreators';
import './style.css';
import axios from '../../http.js';
class Detail extends PureComponent {


    render() {
        const { CommentList } = this.props;
        return (
            <DetailWrapper>
                <Header>{this.props.title}"</Header>
                <DTop>
                    <DImg className="tx" />
                    <DName>{this.props.DName}<br />
                        <Ddet dangerouslySetInnerHTML={{ __html: this.props.Ddet }}>
                        </Ddet>
                    </DName>
                    <DButton>+ 关注</DButton>
                </DTop>
                <DArticle dangerouslySetInnerHTML={{ __html: this.props.DArticle }}>
                </DArticle>
                <p></p>
                <Fragment>
                    <div>
                        <div>
                            <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                            <button onClick={this.props.handleClick}>提交</button>
                        </div>
                        <ul>
                            {
                                CommentList.map((item, index) => {
                                    return <li key={index} >{item}</li>
                                })
                            }
                        </ul>
                    </div>
                </Fragment>
            </DetailWrapper>
        )
    }
    static getDerivedStateFromProps(props, state){
        axios.post('/api/detail/edit/:5cd01b959f3d58286819063f',{CommentList:props.CommentList},(req,res)=>{
            console.log(props.CommentList);
        })

    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        this.bindEvents();

    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    shouldComponentUpdate() {
        console.log('shouldConponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
        console.log(this.props.CommentList)
        // axios.post()
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    bindEvents() {
        window.addEventListener("popstate", (e) => {
            this.props.reductionPages();
        }, false);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    page: state.getIn(['home', 'articlePage']),
    DName: state.getIn(['detail', 'DName']),
    Ddet: state.getIn(['detail', 'Ddet']),
    DArticle: state.getIn(['detail', 'DArticle']),
    inputValue:state.getIn(['detail','inputValue']),
    CommentList:state.getIn(['detail','CommentList'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    },
    reductionPages(articlePage) {
        dispatch(reductionPageAction(articlePage))
    },
    changeInputValue(e) {
        dispatch(actionCreators.changeInputValue(e.target.value));
    },
    handleClick() {
        dispatch(actionCreators.addItem())
    }
})
export default connect(mapState, mapDispatch)(withRouter(Detail));//让Detail有能力获取到router里面所有的内容