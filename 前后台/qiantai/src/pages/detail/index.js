import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Input, Button, List } from 'antd'
import { DetailWrapper, Header, DImg, DTop, Ddet, DName, DButton, DArticle, Content } from './style.js'
import { actionCreators } from './store'
import { reductionPageAction } from '../home/store/actionCreators';
import './style.css';
import tx from '../../statics/images/tx04.jpg'
import axios from '../../http.js';
let co = ['123'];
class Detail extends PureComponent {
    render() {
        const { CommentList } = this.props;
        co = CommentList
        console.log(co);
        return (
            <DetailWrapper>
                <Header>{this.props.title}"</Header>
                <DTop>
                    <img src={tx} className="tx" />
                    <DName>{this.props.DName}<br />
                        <Ddet dangerouslySetInnerHTML={{ __html: this.props.Ddet }}>
                        </Ddet>
                    </DName>
                    <DButton>+ 关注</DButton>
                </DTop>
                <DArticle dangerouslySetInnerHTML={{ __html: this.props.DArticle }}>
                </DArticle>
                <p></p>
                <p>你的评论:</p>
                <div>
                    <div>
                        {
                            <List
                                style={{ marginTop: '10px', width: '300px' }}
                                // bordered
                                dataSource={this.props.CommentList}
                                renderItem={(item, index) => (<List.Item  onClick={this.props.handleDelete.bind(this, index, item)}  >{item}</List.Item>)}
                            />
                        }
                        <Input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                        <Button onClick={this.props.handleClick}>提交</Button>
                    </div>

                </div>
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
    content: state.getIn(['detail', 'content']),
    page: state.getIn(['home', 'articlePage']),
    DName: state.getIn(['detail', 'DName']),
    Ddet: state.getIn(['detail', 'Ddet']),
    DArticle: state.getIn(['detail', 'DArticle']),
    inputValue: state.getIn(['detail', 'inputValue']),
    CommentList: state.getIn(['detail', 'CommentList'])
})
var a = "";

const mapDispatch = (dispatch) => ({
    handleDelete(index, item) {
        // dispatch(actionCreators.deleteItem(index, item))
        //  this.props.storageToDatabase(co)
         console.log(co);
        var b = new Promise(function (succ, err) {
            setTimeout(function () {
                console.log('a');
                dispatch(actionCreators.deleteItem(index, item))
                succ("test")
            }, 500)
        })
        b.then(function (data) {
            axios.post('/api/detail/deleteItem', { "CommentList": co }, (req, res) => {
            })
        })
    },
    // storageToDatabase(co) {
    //     axios.post('/api/detail/deleteItem', { "CommentList": co }, (req, res) => {
    //     })
    // },
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    },
    reductionPages(articlePage) {
        dispatch(reductionPageAction(articlePage))
    },
    changeInputValue(e) {
        dispatch(actionCreators.changeInputValue(e.target.value));
        a = e.target.value
    },
    handleClick() {
        dispatch(actionCreators.addItem())
        axios.post('/api/detail/change', { "CommentList": a }, (req, res) => {
        })
    }
})
export default connect(mapState, mapDispatch)(withRouter(Detail));//让Detail有能力获取到router里面所有的内容