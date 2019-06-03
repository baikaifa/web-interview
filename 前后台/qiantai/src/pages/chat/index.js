import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'
const socket = io('ws://localhost:5000')
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '', msg: [] }
      
    }
    componentDidMount() {
        socket.on('recvmsg', (data) => {
            this.setState({
                msg: [...this.state.msg, data.text]
            })
        })
    }
    handleSubmit() {
        socket.emit('sendmsg', { text: this.state.text })
        this.setState({ text: '' })
    }
    render() {
        const style={
          position:"absolute",
          bottom:0,
          width:"100%"
        }
        return (
            <div>
                {
                    this.state.msg.map(v => {
                        return <p key={v}>{v}</p>
                    })
                }
                <div className="stick-footer">
                    <List    style={style}>
                        <InputItem
                         
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v => {
                                this.setState({ text: v })
                            }}
                            extra={< span onClick={() => this.handleSubmit()}>发送</span>}
                        >
                            信息
                    </InputItem>
                    </List>
                </div >
            </div>

        )
    }
}

export default Chat;