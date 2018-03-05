import React, { Component } from 'react';
import white_ipay_logo from '../images/white-ipay-logo.png';

const menuHeaderColor = {
    background: '#1BB1A5',
    border: 0
};

const headerFontColor = {
    color: 'white'
};

const iconPosition = {
    float: 'left',
    padding: '5px',
    marginLeft: '38px'
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
                             src={ white_ipay_logo } alt="iPay Logo" width="auto" height="38"/>
                        <a style={ headerFontColor } className="navbar-brand"
                           href="https://www.ipay.com.bd">Bizz Tool</a>
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
