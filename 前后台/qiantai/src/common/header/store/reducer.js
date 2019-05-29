import * as constants from './constants';
import { fromJS } from 'immutable'
//immutable库
//immutable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    searchList: [{
        date: "2019-05-03T06:41:45.025Z",
        desc: "如何使用cookie",
        id: "1",
        imgUrl: "https://pic1.zhimg.com/v2-8cf19fc5d6ac5929335b781ad15acd06_1200x500.jpg",
        title: "cookie",
        __v: 0,
        _id: "5ccbe2a97701cd3ba4626d79"
    }],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.ADD_SEARCH_DATA:
            return state.set('searchList', action.data)
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}