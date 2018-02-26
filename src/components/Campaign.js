import React, { Component } from 'react';
import Subtitle from './Subtitle';
import Http from '../services/Http';

class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: []
        };
    }

    componentWillMount() {
        Http.GET('get_comments')
        .then(data => {
            this.setState({
                campaigns: [...this.state.campaigns, ...data]
            });
            console.log('Success campaigns: ', JSON.stringify(this.state.campaigns, null, 2));
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <Subtitle value="Campaign"/>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.state.campaigns.map((item, index) => (
                                <tr>
                                    <td> { item.postId } </td>
                                    <td> { item.id } </td>
                                    <td> { item.name } </td>
                                    <td> { item.email } </td>
                                    <td> { item.body } </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
}

export default Campaign;
