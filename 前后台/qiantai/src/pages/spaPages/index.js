import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  {actionCreators} from './store'
import { Link } from 'react-router-dom'
import './style.js'
class Spa extends Component {
    render() {
        return (
            <div>
                <p></p>
                <p> <Link to={'/button'}>button按钮</Link></p>
                <p><Link to={'/button2'}>button按钮第二种</Link></p>
                <p><Link to={'/words'}>备注文字</Link></p>
            </div>
        )
    }
}
export default Spa