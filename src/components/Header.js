import React, { Component } from 'react';
import white_ipay_logo from '../images/white-ipay-logo.png';

var menuHeaderColor = {
    background: '#1bb1a5',
    border: '0px'
};
var headerFontColor = {
    color: 'white'
};
var iconPosition = {
    float: 'left'
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav style={ menuHeaderColor } className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid menu-header">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <img style={ iconPosition } className="text-left margin-5"
                             src={ white_ipay_logo } alt="ipay" width="110" height="50"/>
                        <a style={ headerFontColor } className="navbar-brand"
                           href="https://www.ipay.com.bd">iPay Bizz Tool</a>
                    </div>
                    { /* <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://www.ipay.com.bd">Dashboard</a></li>
                            <li><a href="https://www.ipay.com.bd">
                                <i className="glyphicon glyphicon-cog"/> Settings</a></li>
                            <li><a href="https://www.ipay.com.bd">Profile</a></li>
                            <li><a href="https://www.ipay.com.bd">Help</a></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </form>
                    </div> */ }
                </div>
            </nav>
        );
    }
}

export default Header;
