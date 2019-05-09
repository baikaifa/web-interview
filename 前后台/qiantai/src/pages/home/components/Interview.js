import  React,{PureComponent} from 'react';
import  { InterviewWrapper,Div1Wrapper,Div2Wrapper,Div3Wrapper,Div4Wrapper } from '../style';

import '../style.css'
class Interview extends PureComponent{
    render(){
        return (
                // <p id="interview">我是interview组件</p>
                <InterviewWrapper>
                    <Div1Wrapper>前端工程师跳槽面试></Div1Wrapper>
                    <Div2Wrapper>前端JS专项目面试></Div2Wrapper>
                    <Div3Wrapper>前端初级工程面试></Div3Wrapper>
                    <Div4Wrapper>Web前端性能优化></Div4Wrapper>

                </InterviewWrapper>
        )
    }
}

export default Interview;