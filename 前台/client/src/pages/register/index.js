import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
class Login extends PureComponent {
    render() {
        const { registerStatus } = this.props;
        console.log(registerStatus);
        if (!registerStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号（请用邮箱注册）' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                        <Input placeholder='确认密码' type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.register(this.account, this.password)}>注册</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
                }
            }
        }
const mapState = (state) => ({
                    registerStatus: state.getIn(['register', 'register'])
            })
            
const mapDispatch = (dispatch) => ({
                    register(accountElem, passwordElem) {
                dispatch(actionCreators.register(accountElem.value, passwordElem.value))
            }
        })
export default connect(mapState, mapDispatch)(Login);