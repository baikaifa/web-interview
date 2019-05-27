import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    title: '',
    content: '',
    DName:'',
    Ddet:'',
    DArticle:'',
    Comment:''
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
                Comment: action.Comment
            })
        default:
            return state;
    }
}