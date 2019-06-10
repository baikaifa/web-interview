import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import './style.css'
class UserInfo extends PureComponent {
    render() {
        return (
            <div>
                我是用户详情
            </div>
        )
    }


}
export default connect(null, null)(UserInfo);