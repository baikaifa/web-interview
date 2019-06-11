import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // height: 200px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    flex: 1.5;
    // height: 200px;
    margin-right: 30px;
    // float:left;
    // margin-left:15px;
    // padding-top:30px;
    // width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`
export const LeftWhite= styled.div`
    flex-basis: 100px;
    order: -1;
    // height: 200px;
`
export const RightWhite= styled.div`
    flex-basis: 100px;
    // height: 200px;
`
export const HomeRight = styled.div`
    flex: 0.7;
    // height: 200px;
    
`
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom:1px solid #bcbcbc;
`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right:10px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: 000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float:left;
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float:left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size:contain;
`
//writer组件
export const WriterWrapper = styled.div`
    width: 100%;
    border-top: 1px solid #dcdcdc;
    border-radius: 3px;
    // height: 300px;
`
export const WTitle = styled.div`
    width: 100%;
    font-size: 17px;
    font-weight: bold;
    margin: 10px auto;
`
export const Wfor = styled.div`
    width: 100%;
    margin: 5px auto;
    height: 85px;
`
// export const WImg = styled.div`
//     width: 70px;
//     height: 70px;
//     border-radius: 50%;
//     overflow: hidden;
//     background-color: #ccc;
//     float: left;
//     margin-right: 10px;
// `
export const WName = styled.p`
    float: left;
    font-size: 15px;
    color: black;
`
export const Wxq = styled.span`
    float: left;
    padding-top: 20px;
    font-size: 13px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align:center;
    border-radius: 20px;
    cursor:pointer;
`
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align:center;
    border: 1px solid #ccc;
    font-size: 14px;
`
export const InterviewWrapper = styled.div`
height:300px;
width:100%;
`

export const Div1Wrapper = styled.div`
width:80%；
margin-right:10%;
margin-top:5%;
height:17%;
border:1px solid whitesmoke;
border-radius:10px;
background:orange;
`
export const Div2Wrapper = styled.div`
width:80%；
margin-right:10%;
margin-top:5%;
height:17%;
border:1px solid whitesmoke;
border-radius:10px;
background:#F7C2D4;
`
export const Div3Wrapper = styled.div`
width:80%；

margin-right:10%;
margin-top:5%;
height:17%;
border:1px solid whitesmoke;
border-radius:10px;
background:#BAE389;
`
export const Div4Wrapper = styled.div`
width:80%；
margin-right:10%;
margin-top:5%;
height:17%;
border:1px solid whitesmoke;
border-radius:10px;
background:#C5CCF0;
`
export const PWrapper = styled.p`
height:100%;
margin-left:5%;
padding-top:5%;
`


