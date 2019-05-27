import React, { Component } from 'react'
import axios from 'axios';
import { getJwt } from './jwt'
import  {withRouter} from 'react-router-dom'
class AuthenticationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        const jwt = getJwt();
        if (!jwt) {
            this.props.history.push('/Login');
        }
        axios.get('/api/users/login', { headers: { Authorization: `Bearer ${jwt}` } })
            .then((res) => res.setState({
                user: res.data.jwt
            })).catch(err => {
                this.props.history.push('/Login');
            });
    }
    render() {
        if (this.state.user === undefined) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>

        )
    }
}
export default withRouter(AuthenticationComponent);