import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    title: '',
    content: '',
    DName: '',
    Ddet: '',
    DArticle: '',
    inputValue: '',
    CommentList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
                DName: action.DName,
                Ddet: action.Ddet,
                DArticle: action.DArticle,
                CommentList: action.CommentList
            });
        case constants.CHANGE_INPUT_VALUE:
            return state.merge({
                inputValue: action.inputValue
            })
        case constants.ADD_ITEM:
            const value = state.get('inputValue');
            const newList = [value];
            return state.merge({
                'CommentList': state.get('CommentList').concat(newList),
                inputValue: "",
            })
        case constants.DELETEITEM:
            let originState = JSON.parse(JSON.stringify(state.get("CommentList")))
            originState.splice(action.index, 1)
            return state.merge({
                "CommentList": originState
            })
        default:
            return state;
    }
}

