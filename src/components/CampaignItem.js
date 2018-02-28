import React, { Component } from 'react';

class CampaignItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value: item} = this.props;
        return (
            <tr>
                <td> { item.postId } </td>
                <td> { item.id } </td>
                <td> { item.name } </td>
                <td> { item.email } </td>
                <td> { item.body } </td>
                <td>
                    <button className="btn btn-danger btn-sm" type="submit" onClick={() => this.props.remove(item.id)}>
                        <i className="glyphicon glyphicon-trash" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CampaignItem;
