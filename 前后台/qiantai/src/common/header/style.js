import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position:relative;
    height: 56px;
    border-bottom:1px solid #ccc;
`
export const SearchInfoList = styled.div`
    overflow:hidden;
    li{
        list-style:none;
        cursor:pointer;
    }
   
`
// export const Logo = styled.div`
//     position:absolute;
//     top:0;
//     left:0;
//     display:block;
//     width: 100px;
//     height: 56px;
//     background-size: contain;
// `

export const Nav = styled.div`
    width: 85%;
    height: 100%;
    box-sizing:border-box ;
    margin: 0 ;
`
export const NavItem = styled.div`
line-height: 59px;
padding:0 35px;
font-size: 17px;
color: #333;
         &.left{
             float:left;
         }
         &.right{
             float:right;
             color: #969696;
         }
         &.active{
             color: #ea6f5a;
         }
         &.logo{
             float: left;
             color: #ea6f5a;
             font-size: 20px;
             font-weight: bold;
         }
         &.reg{
             float: right;
             color: #969696
         }
`

export const SearchWrapper = styled.div`
    position:relative;         
    float:left;

    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: green;
        text-align:center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border:none;
    outline:none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
        background: black;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`
export const SearchInfo = styled.div`
    position:absolute
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background: #fff;
    z-index:1000;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color: #969696;
`
export const SearChInfoSwitch = styled.span`
    float:right;
    font-size: 1em;
    cursor:pointer;
    .spin{
        font-size: 12px;
        margin-right:0.2em;
        display:blcok;
        transition:all .2s ease-in;
        transform-origin:center center ;
    }

`
export const SearchInfoItem = styled.li`
    display: block;
    float:left;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 20px;
    margin-top: 20px;
`


export const Addition = styled.div`
    position:absolute
    right:0;
    top:0;
`

export const Button = styled.div`
    float: left;
    margin-right: 40px;
    margin-top: 9px;
    line-height: 38px;    
    width:70px;
    &.writting{
        color: #fff;
        text-align: center;
        background-color: #ec6149;
        border-radius: 15px;
    }
`