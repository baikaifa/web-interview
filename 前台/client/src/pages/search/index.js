import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style.js'
import { actionCreators } from './store'
import { reductionPageAction } from '../home/store/actionCreators'
class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        this.bindEvents();

    }
    bindEvents() {
        function pushHistory() {
            var state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", "#xx");
        }
        pushHistory();
        window.addEventListener("popstate", (e) => {
            this.props.reductionPages();
        }, false);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    },
    reductionPages(articlePage) {
        dispatch(reductionPageAction(articlePage))
    }

})
export default connect(mapState, mapDispatch)(withRouter(Detail));//让Detail有能力获取到router里面所有的内容