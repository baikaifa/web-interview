import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import './style.css'
import { actionCreators } from './store'
class Login extends PureComponent {
    render() {
        const { registerStatus } = this.props;
        console.log(registerStatus);
        if (!registerStatus) {
            return (
                <LoginWrapper>
                    <h1>注册</h1>
                    <LoginBox>
                        <Input placeholder='账号（请用邮箱注册）' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                        <Input placeholder='确认密码' type='password' ref={(input) => { this.password = input }} />
                        
                    </LoginBox>
                    <span>点击注册即表示您同意并愿意遵守<br /><a>隐私协议</a>和<a>用户协议</a></span><br/>
                    <Button onClick={() => this.props.register(this.account, this.password)}>注册</Button><br/>
                    <p className="sjzhdl">———————&nbsp;&nbsp;社交账号直接注册&nbsp;&nbsp;———————</p>
                    <div className="tubiao">
                        <i className="iconfont icon-weibo" id="weibo"></i>
                        <i className="iconfont icon-weixin" id="weixin"></i>
                        <i className="iconfont icon-tubiao215" id="qq"></i>
                    </div>
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