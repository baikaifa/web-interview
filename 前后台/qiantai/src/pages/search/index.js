import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from './style';
import { connect } from 'react-redux'
import  {Link} from 'react-router-dom'
class Search extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem key={index}>
                                <img alt='' className='pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['header', 'searchList']),//home.articleList
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
    // getMoreList(page) {
    //     dispatch(actionCreators.getMoreList(page))
    // }
})
export default connect(mapState, null)(Search);