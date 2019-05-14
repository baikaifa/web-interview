import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { InterviewWrapper, Div1Wrapper, Div2Wrapper, Div3Wrapper, Div4Wrapper, PWrapper } from '../style';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Interview extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        switch (index) {
                            case 0:
                                return (
                                    <Link to='/tiaocao'><Div1Wrapper><PWrapper>{item.get('title')}></PWrapper></Div1Wrapper></Link>
                                )
                            case 1:
                                return (
                                    <Div2Wrapper><PWrapper>{item.get('title')}></PWrapper></Div2Wrapper>
                                )
                            case 2:
                                return (
                                    <Div3Wrapper><PWrapper>{item.get('title')}></PWrapper></Div3Wrapper>
                                )
                            case 3:
                                return (
                                    <Div4Wrapper><PWrapper>{item.get('title')}></PWrapper></Div4Wrapper>
                                )
                        }
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'fourList'])
})
export default connect(mapState, null)(Interview);