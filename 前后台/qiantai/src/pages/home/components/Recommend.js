import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// import { RecommendWrapper, RecommendItem } from '../style'
import { Link } from 'react-router-dom'

import { WriterWrapper, WTitle, WImg, WName, Wxq, Wfor } from '../style';
class Recommend extends PureComponent {
    render() {
        return ( 
            this.props.list.map((item,index) => {
                return (     
                    <Link key={index} to={'/recommendDetail/'+ item.get('id')}>
                    <WriterWrapper key={index}>
                        <WTitle>推荐作者</WTitle>
                        <Wfor>
                            <WImg></WImg>
                            <WName>
                                {item.get('name')}  
                                <br />
                                <Wxq>{item.get('desc')}</Wxq>
                            </WName>
                        </Wfor>
                    </WriterWrapper>
                    </Link>
                )
            })
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);