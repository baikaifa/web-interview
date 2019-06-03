import React, { PureComponent } from 'react';
// import { ListItem, ListInfo, LoadMore } from '../style';
// InterviewWrapper ,
import { Div1Wrapper, Div2Wrapper, Div3Wrapper, Div4Wrapper, PWrapper } from '../style';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import io from 'socket.io-client'
const socket = io('ws://localhost:5000')
class Interview extends PureComponent {
    componentDidMount() {
        socket.on('recvmsg', (data) => {
            alert('Interview页面也能收到数据',data);
        })
    }
    render() {
        
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        switch (index) {
                            case 0:
                                return (
                                    <Link to='/tiaocao' key={index}  ><Div1Wrapper  ><PWrapper >{item.get('title')}></PWrapper></Div1Wrapper></Link>
                                )
                            case 1: 
                                return (
                                    <Div2Wrapper key={index}><PWrapper>{item.get('title')}></PWrapper></Div2Wrapper>
                                )
                            case 2:
                                return (
                                    <Div3Wrapper key={index}><PWrapper>{item.get('title')}></PWrapper></Div3Wrapper>
                                )
                            case 3:
                                return (
                                    <Div4Wrapper key={index}><PWrapper>{item.get('title')}></PWrapper></Div4Wrapper>
                                )
                            default:
                                     return(
                                         <div key={index}>竟然没有数据</div>
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