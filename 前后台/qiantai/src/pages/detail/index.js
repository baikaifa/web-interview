import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, DImg, DTop, Ddet, DName, DButton, DArticle,  } from './style.js'
import { actionCreators } from './store'
import { reductionPageAction } from '../home/store/actionCreators';
import './style.css';
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
                            <span className="comment">您的评论：</span><br/>
                            <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                            <button onClick={this.props.handleClick}>提交</button>
                        </div>
                        <ul>
                            {
                                CommentList.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                </Fragment>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
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