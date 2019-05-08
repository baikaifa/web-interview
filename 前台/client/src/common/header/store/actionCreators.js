import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length / 10)
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
        console.log(item.props.children);
        axios.post('/api/headerList/search',{'keywords':item.props.children}).then((res)=>{
            console.log(res.data);
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
