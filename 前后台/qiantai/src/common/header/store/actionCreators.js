import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})
const addSearchData = (data) => ({
    type: constants.ADD_SEARCH_DATA,
    data: fromJS(data)
})
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})
export const changePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})
export const searchItem =(item)=>{
    // type:constants.SEARCH_ITEM
    return (dispatch)=>{
        axios.post('/api/headerList/search',{'keywords':item.props.children}).then((res)=>{
            const data=Array(res.data[0]);
            console.log(res);
          //注意传过去的必须是数组对象，不然不能使用get方法
             dispatch(addSearchData((data)));
            //  this.props.history.push('/search',null)
        }).catch((err) => {
            console.log(err);
        })

    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList/headerList').then((res) => {
            const data = res.data;
            dispatch(changeList(data[0].data));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const getMoreList = ()=>{
    return (dispatch)=>{
        console.log('click');
    }
}
