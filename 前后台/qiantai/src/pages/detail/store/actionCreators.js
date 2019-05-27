import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content, DName, Ddet, DArticle) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
    DName,
    Ddet,
    DArticle
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail/detail?id='+ (id-1)).then((res) => {
            console.log(res.data.data);
            dispatch(changeDetail(res.data.data.title, res.data.data.content,res.data.data.DName,res.data.data.Ddet,res.data.data.DArticle));
        })
        // axios.get('/api/detail?id=' + id).then((res) => {
        //     const result = res.data.data;
        //     console.log(result);
        //     dispatch(changeDetail(result[id-1].title, result[id-1].content));
        // })
    }
}