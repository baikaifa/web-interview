// import React, { PureComponent } from 'react'
// import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { actionCreators } from './store'
// import { LoginWrapper, LoginBox, Input, Button } from './style'
// class Login extends PureComponent {
//     render() {
//         const { loginStatus } = this.props;
//         console.log(loginStatus);
//         if (!loginStatus) {
//             return (
//                 <LoginWrapper>
//                     <LoginBox>
//                         <Input placeholder='账号' ref={(input) => { this.account = input }} />
//                         <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
//                         <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
//                     </LoginBox>
//                 </LoginWrapper>
//             )
//         } else {
//             return <Redirect to='/' />
//                 }
//             }
//         }
// const mapState = (state) => ({
//                     loginStatus: state.getIn(['login', 'login'])
//             })

// const mapDispatch = (dispatch) => ({
//                     login(accountElem, passwordElem) {
//                 dispatch(actionCreators.login(accountElem.value, passwordElem.value))
//             }
//         })
// export default connect(mapState, mapDispatch)(Login);
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import React, { Component } from 'react'
import  {Link} from 'react-router-dom'
import { LoginBox } from './style'
import './style.css'
// message,
import { Row, Col, Form, Icon, Input, Button, Checkbox, } from 'antd';
class NormalLoginForm extends Component {

    handleSubmit = (e) => {
        let userInfo = this.props.form.getFieldsValue();
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
        this.props.login(userInfo.userName, userInfo.password);
        // this.props.login(this.account.props.value, this.password.props.value);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { loginStatus } = this.props;
let text="&nbsp;";
        console.log(this.props.loginStatus);
        if (!loginStatus) {
            return (
                <LoginBox>
                    <h1>登录</h1>

                <Row>
                    <Col offset={3} span={18}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item hasFeedback>
                                {
                                    this.handleValidator = (rule, val, callback) => {

                                        if (!val) {
                                            callback('不能为空');
                                        }
                                        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val)) {
                                            callback('邮箱格式错误');
                                        }
                                        callback();
                                    }
                                }
                                {getFieldDecorator('userName', {
                                    rules: [
                                        { validator: this.handleValidator }
                                        // {required: true, message: 'Please input your username!' },
                                        // {pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, message: '请输入正确的邮箱格式' },
                                        // {min: 6,max:10,message:'长度是6-10'}
                                    ],
                                })(
                                    <Input ref={(input) => { this.account = input }} addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { required: true, message: '请输入您的密码!' },
                                        { pattern: /^[a-zA-Z0-9]{6,10}$/, message: '6位数字或字母' }
                                    ],
                                })(
                                    <Input ref={(input) => { this.password = input }} addonBefore={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <br />
                                <Button type="primary" htmlType="submit" className="login-form-button" >登录</Button>
                                <br />
                                <a className="login-form-forgot" href="www.baidu.com">忘记密码？</a>
                                <span dangerouslySetInnerHTML={{__html:text}}></span>   or  <Link to={'/register'} > <span dangerouslySetInnerHTML={{__html:text}}></span> 立即注册</Link>
                                         
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <p className="sjzhdl">—————————&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;—————————</p>
                <div className="tubiao">
                    <i className="iconfont icon-weibo" id="weibo"></i>
                    <i className="iconfont icon-weixin" id="weixin"></i>
                    <i className="iconfont icon-tubiao215" id="qq"></i>
                </div>
                </LoginBox>
            );
        }
        else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem, passwordElem))
    }
})

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default connect(mapState, mapDispatch)(Login);