import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import Alerts from './Alerts';
import Http from '../services/Http';
import { APPLICATION_ID } from '../constant';
import { getDeviceID } from '../services/Util';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginID: '',
            password: '',
            deviceID: getDeviceID(),
            appID: APPLICATION_ID,
            error: {
                loginID: false,
                password: false
            },
            alert: null,
            redirectTo: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
    }

    handleChange(event) {
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            alert: null
        });

        const {loginID, password, deviceID, appID} = this.state;
        console.log(loginID,password,deviceID, appID)

        Http.POST('login', {loginID, password, deviceID, appID})
        .then(({data}) => {
            console.log('LOGIN SUCCESS: ', JSON.stringify(data.token, null, 2));
            localStorage.setItem('token', JSON.stringify(data.token));

            this.setState({
                redirectTo: "/app/home"
            });
        })
        .catch(response => {
            console.log('LOGIN Error: ', JSON.stringify(response, null, 2));

            this.setState({
                password: '',
                alert: {
                    message: "Invalid Email Address or Password",
                    type: "danger"
                }
            });
        });
    }

    handleValidation(event) {
        const {name} = event.target;
        const error = {
            [name]: !this.state[name]
        };

        this.setState(previous_state => ({
            error: {
                ...previous_state.error,
                ...error
            }
        }));
    }

    isValidForm() {
        const {loginID, password} = this.state;
        return !(loginID && password);
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="wrapper-box">
                        { this.state.alert ? <Alerts type={ this.state.alert.type } value={ this.state.alert.message }/> : null }
                        <form className="form-signin" onSubmit={ this.handleSubmit }>
                            <h2 className="form-signin-heading">Please Login</h2>
                            <input type="text"
                                   className="form-control"
                                   id="loginID"
                                   name="loginID"
                                   placeholder="Email Address"
                                   value={ this.state.loginID }
                                   onChange={ this.handleChange }
                                   onBlur={ this.handleValidation }
                                   aria-describedby="helpLoginID"
                                   autoComplete="on"/>

                            { this.state.error.loginID ? <span id="helpLoginID"
                                                               className="help-block text-danger"
                                                               style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>Email Address Required</small>
                            </span> : null }

                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   value={ this.state.password }
                                   onChange={ this.handleChange }
                                   onBlur={ this.handleValidation }
                                   aria-describedby="helpPassword"
                                   style={ {marginBottom: 0} }/>

                            { this.state.error.password ? <span id="helpPassword"
                                                                className="help-block text-danger"
                                                                style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>Password Required</small>
                            </span> : null }

                            <button className="btn btn-lg btn-success btn-block margin-top-20"
                                    type="submit"
                                    disabled={ this.isValidForm() }>Login
                            </button>

                            { /*<Link to="/app/settlement-reconciliation"*/ }
                            { /*className="btn btn-lg btn-success btn-block">Login</Link>*/ }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// class Login extends Component {
//     render() {
//         return (
//             <div className="col-md-4 col-md-offset-4">
//                 <div className="wrapper-box">
//                     <form className="form-signin">
//                         <h2 className="form-signin-heading">Please Login</h2>
//                         <input type="text" className="form-control" name="username"
//                                placeholder="Email Address" required="" autoFocus=""/>
//                         <input type="password" className="form-control" name="password"
//                                placeholder="Password" required=""/>
//                         <label className="checkbox">
//                             <input type="checkbox" value="remember-me" id="rememberMe"
//                                    name="rememberMe" disabled/> Remember me
//                         </label>
//                         { /*<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>*/ }
//                         <Link to="/app/home"
//                               className="btn btn-lg btn-success btn-block">Login</Link>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

export default Login;
