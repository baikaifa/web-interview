import axios from 'axios'
import * as constants from './constants'
const changeRegister = () => ({
    type: constants.CHANGE_REGISTER,
    value: true
})

export const logout = () => ({
    type: constants.LOGOOUT,
    value: false
})

export const register = (account, password) => {
    return (dispatch) => {
        console.log(account,password);
        axios.post('/api/users/register',{'email':account,'password':password}).then((res) => {
            alert('注册成功');
            window.location ='/login'
        })
    }
}