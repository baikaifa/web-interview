import axios from '../../../http'
import * as constants from './constants'
export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOOUT,
    value: false
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.post('/api/users/login',{'email':account,'password':password}).then((res) => {
            if (res.data.success) {
                dispatch(changeLogin())
            } else {
                alert(res.data);
            }
        }).catch((err)=>{alert(err)})
    }
}