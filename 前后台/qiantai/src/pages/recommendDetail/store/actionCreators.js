import axios from 'axios'
import * as constants from './constants'

export const changeInputValue = (inputValue) => ({
    type: constants.CHANGE_INPUT_VALUE,
    inputValue
});

export const addItem = () => ({
    type: constants.ADD_ITEM
});
const changeDetail = (title, content, DName, Ddet, DArticle, CommentList, _id) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
    DName,
    Ddet,
    DArticle,
    CommentList,
    _id,
})
export const deleteItem = (index, item) => ({
    type: constants.DELETEITEM,
    item,
    index
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail/detail?id=' + (id - 1)).then((res) => {
            dispatch(changeDetail(res.data.data.title, res.data.data.content, res.data.data.DName, res.data.data.Ddet, res.data.data.DArticle, res.data.data.CommentList, res.data.data._id));
        })
        // axios.get('/api/detail?id=' + id).then((res) => {
        //     const result = res.data.data;
        //     console.log(result);
        //     dispatch(changeDetail(result[id-1].title, result[id-1].content));
        // })
    }
}