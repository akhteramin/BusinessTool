import React, { Component } from 'react';
import Title from './Title';
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
            this.setState({
                campaigns: [...this.state.campaigns, ...data]
            });
            console.log("Success campaigns: ", JSON.stringify(this.state.campaigns, null, 2));
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <Title value="Campaign" />
                <ul>
                    { this.state.campaigns.map((item, index) => ( <li className='indent'> { item.title } </li> )) }
                </ul>
            </div>
        );
    }
}

export default Campaign;
