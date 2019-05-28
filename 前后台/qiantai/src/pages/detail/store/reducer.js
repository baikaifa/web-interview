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
            console.log(state);
            return state.merge({
                title: action.title,
                content: action.content,
                DName: action.DName,
                Ddet: action.Ddet,
                DArticle: action.DArticle,
                CommentList: action.CommentList
            });
        case constants.CHANGE_INPUT_VALUE:
            console.log(action);
                return state.merge({
                    inputValue: action.inputValue
                })
        case constants.ADD_ITEM:
            const value=state.get('inputValue');
            const newList=[value];
            return (
                state.merge({
                'CommentList': state.get('CommentList').concat(newList),
                inputValue:""
            }))
        // case constants.ADD_TODO_ITEM:
        //     const bnewState = JSON.parse(JSON.stringify(state));
        //     bnewState.list.push(bnewState.inputValue);
        //     bnewState.inputValue = '';
        //     return bnewState;
        // case constants.DELETE_TODO_ITEM: {
        //     const cnewState = JSON.parse(JSON.stringify(state));
        //     cnewState.list.splice(action.index, 1);
        //     return cnewState;
        // }
        // case constants.GAIN_COMMENT:{
        //     const dnewState=JSON.parse(JSON.stringify(state));
        //     return dnewState;
        // }
        default:
            return state;
    }
}

