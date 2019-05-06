import * as constants from "./constants"
import axios from 'axios'
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home/home').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            dispatch(changeHomeData(action));
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList?page=' + page).then((res) => {
            console.log('/api/homeList?page=' + page);
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})