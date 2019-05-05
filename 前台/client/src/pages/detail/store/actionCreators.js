import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail/detail?id='+ id).then((res) => {
            const result = res.data[0].data;
            // const result=result[0];
            console.log('1');
            console.log(res.data[0].data);
            dispatch(changeDetail(result[id-1].title, result[id-1].content));
        })
        // axios.get('/api/detail?id=' + id).then((res) => {
        //     const result = res.data.data;
        //     console.log(result);
        //     dispatch(changeDetail(result[id-1].title, result[id-1].content));
        // })
    }
}