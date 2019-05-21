import axios from 'axios'
import * as constants from './constants'
const changeLogin = () => ({
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
            console.log(account,password);
            console.log(res);
            if (res.data.success) {
                dispatch(changeLogin())
            } else {
                alert(res.data);
            }
        }).catch((err)=>{alert(err)})
    }
}