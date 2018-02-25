import React, { Component } from 'react';
import Http from '../services/Http';

class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: []
        };
    }

    componentWillMount() {
        Http.GET('get_posts')
        .then(data => {
            console.log("Success: ", JSON.stringify(data, null, 2));

            this.setState({
                campaigns: [...this.state.campaigns, data]
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <h1>Campaign</h1>
            </div>
        );
    }
}

export default Campaign;
