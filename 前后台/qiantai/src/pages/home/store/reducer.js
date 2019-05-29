import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    fourList:[],
    articlePage: 1,
    showScroll: false
});
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        fourList:fromJS(action.fourList)
    })
}

const addArticleList=(state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        case constants.REDUCTION_PAGE:
            return state.set('articlePage',1);
        default:
            return state;
    }
}