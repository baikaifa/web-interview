import  React,{PureComponent} from 'react';
import  { InterviewWrapper,Div1Wrapper,Div2Wrapper,Div3Wrapper,Div4Wrapper,PWrapper } from '../style';

import '../style.css'
class Interview extends PureComponent{
    render(){
        return (
                // <p id="interview">我是interview组件</p>
                <InterviewWrapper>
                    <Div1Wrapper><PWrapper>前端工程师跳槽面试></PWrapper></Div1Wrapper>
                    <Div2Wrapper><PWrapper>前端JS专项目面试></PWrapper></Div2Wrapper>
                    <Div3Wrapper><PWrapper>前端初级工程面试></PWrapper></Div3Wrapper>
                    <Div4Wrapper><PWrapper>Web前端性能优化></PWrapper></Div4Wrapper>

                </InterviewWrapper>
        )
    }
}

export default Interview;