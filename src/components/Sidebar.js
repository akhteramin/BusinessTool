import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import white_ipay_logo from '../images/white-ipay-logo.png';

import NavItem from './NavItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
    }

    render() {
        return (
            <nav id="sidebar" className={ this.state.isCollapsed ? 'active' : '' }>
                <div className="sidebar-header pointer"
                     id="sidebarCollapse"
                     onClick={ () => this.setState({isCollapsed: !this.state.isCollapsed}) }>
                    <img src={ white_ipay_logo } alt="iPay Logo"/>
                    <div className="sidebar-title">Bizz Tools</div>
                </div>

                <ul className="list-unstyled components">
                    <NavItem path="/app/settlement-reconciliation">
                        <i className="glyphicon glyphicon-link"/>
                        Settlement Reconciliation
                    </NavItem>
                    <NavItem path="/app/bank-statements">
                        <i className="glyphicon glyphicon-paperclip"/>
                        Bank Statements
                    </NavItem>

                    { /*<li className="active">*/ }
                    { /*<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">*/ }
                    { /*<i className="glyphicon glyphicon-home"/>*/ }
                    { /*Home*/ }
                    { /*</a>*/ }
                    { /*<ul className="collapse list-unstyled" id="homeSubmenu">*/ }
                    { /*<li><Link to="/app/settlement-reconciliation">Settlement Reconciliation</Link></li>*/ }
                    { /*<li><Link to="/app/bank-statements">Bank Statements</Link></li>*/ }
                    { /*</ul>*/ }
                    { /*</li>*/ }
                    { /*<li>*/ }
                    { /*<a href="https://ipay.com.bd">*/ }
                    { /*<i className="glyphicon glyphicon-briefcase"/>*/ }
                    { /*About*/ }
                    { /*</a>*/ }
                    { /*<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">*/ }
                    { /*<i className="glyphicon glyphicon-duplicate"/>*/ }
                    { /*Settings*/ }
                    { /*</a>*/ }
                    { /*<ul className="collapse list-unstyled" id="pageSubmenu">*/ }
                    { /*<li><a href="https://ipay.com.bd">Business Rule</a></li>*/ }
                    { /*<li><a href="https://ipay.com.bd">Fees & Charges</a></li>*/ }
                    { /*</ul>*/ }
                    { /*</li>*/ }
                    { /*<li>*/ }
                    { /*<a href="https://ipay.com.bd">*/ }
                    { /*<i className="glyphicon glyphicon-send"/>*/ }
                    { /*Contact*/ }
                    { /*</a>*/ }
                    { /*</li>*/ }
                </ul>

                <ul className="list-unstyled CTAs">
                    { /*<li>*/ }
                    { /*<a href="https://www.ipay.com.bd" className="article">Accounts & Settings</a>*/ }
                    { /*</li>*/ }
                    <li>
                        <Link to="/login" className="download">Logout</Link>
                    </li>

                </ul>
            </nav>
        );
    }
};

export default Sidebar;