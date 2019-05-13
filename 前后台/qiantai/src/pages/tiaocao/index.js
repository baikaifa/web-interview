import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import  './style.css'
class Tiaocao extends PureComponent {
    render() {
            return (
              <div>
                  我是跳槽页面
              </div>
            )}
    //     } else {
    //         return <Redirect to='/login' />
    //     }
    // }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Tiaocao);