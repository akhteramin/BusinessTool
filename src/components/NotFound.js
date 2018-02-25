import React, { Component } from 'react';
import not_found from'../images/not-found.jpg';

class NotFound extends Component {
    render() {
        return (
            <div>
               <h1>404 Page Not Found</h1>
                <img src={not_found} alt="404 Not Found"/>
            </div>
        );
    }
}

export default NotFound;
