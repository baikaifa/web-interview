import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const HomeLeft = styled.div`
flex: 0.5;
border: 2px solid #808080;
margin-right: 5px;
`

export const HomeRight = styled.div`
flex: 2;
border: 2px solid #808080;
.wbtwz{
    height: 30px;
    p{
        font-size: 25px;
    }
}
.wbtwz_line{
    background-color: #BBBBBB;
    ul{
        li{
            color: black;
            i{
                color: black;
            }
        }
    }
}
`
export const LeftWhite = styled.div`
flex-basis: 150px;
order: -1;
`
export const RightWhite = styled.div`
flex-basis: 150px;
`

export const NewArticle = styled.div`
height:3rem;
.xjwz{
    color: black;
    font-size: 18px;
    i{
        color: black;
        font-size: 16px;
        margin-right: 8px;
    }
}
`
export const NoTitleArticle = styled.div`
height:5rem;
background: #ccc;
border-left: 3px solid red;
margin-left: -2px;
#wbtwz{
    color: black;
    font-size: 16px;
    margin-left: 15px;
    padding-top: 10px;
    .zs{
        color: black;
        font-size: 14px;
        i{
            color: black;
            font-size: 16px;
            margin-right: 5px;
        }
    }
    .set{
        i{
            color: black;
            font-size: 18px;
            float: right;
            padding-right:20px;
        }
    }
}

`