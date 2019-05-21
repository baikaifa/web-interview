import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// import { RecommendWrapper, RecommendItem } from '../style'
import { WriterWrapper, WTitle, WImg, WName, Wxq, Wfor } from '../style';
class Recommend extends PureComponent {
    render() {
        return ( 
                this.props.list.map((item) => {
                    return (
                        <WriterWrapper>
                            <WTitle>推荐作者</WTitle>
                            <Wfor>
                                <WImg></WImg>
                                <WName>
                                {item.get('title')}
                                    <br />
                                    <Wxq>{item.get('desc')}</Wxq>
                                </WName>
                            </Wfor>
                        </WriterWrapper>
                    )
                })
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);