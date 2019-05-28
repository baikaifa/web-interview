import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  {actionCreators} from './store'
import './style.js'
import $ from 'jquery';
class Button extends Component {
    render() {
        return (
            <div className="box">

            </div>
        )
    }
    componentDidMount() {
        var $btn,
            i = 9,
            html = '<input type="button"value="同意">'
        $(function () {
            $('div.box').html(html);
            $btn = $('input[type="button"]');
            $btn.val('同意(' + i-- + 's)');
            $btn.attr('disabled', 'disabled');
            var timer = window.setInterval(function () {
                $btn.val('同意(' + i-- + 's)');
                if (i === -1) {
                    window.clearInterval(timer);
                    $btn.val('同意');
                    $btn.removeAttr('disabled');
                }
            }, 1000);
            $btn.click(function () {
                alert('你同意了');
            })
        })
    }
}
export default Button
