import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="https://www.ipay.com.bd">Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
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
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
