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
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList/headerList').then((res) => {
            console.log(res);
            const data = res.data;
            console.log(res.data);
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
