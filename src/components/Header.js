import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Better Payments</h1>
                <p>How can I help today?</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Deposit</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Pay Bill</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Other</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Help</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
