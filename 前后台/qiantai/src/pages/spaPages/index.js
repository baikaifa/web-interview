import  React , { Component }  from 'react'
import  {connect} from 'react-redux'
// import  {actionCreators} from './store'
import Buttonn from './button'
import  {Link} from 'react-router-dom'
import  './style.js'
class Spa extends Component{
    render(){
        return (
           <Link to={'/button'}>button按钮</Link> 
        )
    }
}
export default Spa