import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Http from '../services/Http';

import spinner from '../images/ajax-loader.gif';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: false
        };
        this.updateLocalState = this.updateLocalState.bind(this);
    }

    updateLocalState(response) {
        console.log('LOGOUT Response: ', JSON.stringify(response, null, 2));
        localStorage.removeItem('token');

        this.setState({
            redirectTo: '/login'
        });
    }

    componentDidMount() {
        Http.GET('logout')
        .then(this.updateLocalState)
        .catch(this.updateLocalState);
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={ this.state.redirectTo }/>;
        }

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center">
                    <img src={ spinner } style={ {
                        width: 20,
                        height: 20,
                        marginTop: 150,
                    } } alt="Ajax Loader"/>
                </div>
            </div>
        );
    }
}

export default Logout;