import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        // axios.get('/api/detail/detail?id='+ (id-1)).then((res) => {
        //     dispatch(changeDetail(res.data.data.title, res.data.data.content));
        // })
        // axios.get('/api/detail?id=' + id).then((res) => {
        //     const result = res.data.data;
        //     console.log(result);
        //     dispatch(changeDetail(result[id-1].title, result[id-1].content));
        // })
    }
}