import * as constants from "./constants"
import axios from 'axios'
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    fourList:result.fourList
})
const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})
export const reductionPageAction=(articlePage)=>({
    type:constants.REDUCTION_PAGE,
    articlePage
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home/home').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList,
                fourList:result.fourList
            }
            dispatch(changeHomeData(action));
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList?page=' + page).then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(addHomeList(result, page + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
