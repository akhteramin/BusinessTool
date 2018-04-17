import React, { Component } from 'react';
import moment from 'moment';

class StatementMetadata extends Component {
    render() {
        const {title, data, category} = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{ title }
                        <small>{ ` from ${data.period}` }</small>
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-9">
                            <dl className="dl-horizontal" style={ {marginBottom: 5} }>
                                <dt>
                                    <small>Name</small>
                                </dt>
                                <dd>
                                    <small>{ data.accountName }</small>
                                </dd>
                                <dt>
                                    <small>Account No</small>
                                </dt>
                                <dd>
                                    <small>{ data.accountNumber }</small>
                                </dd>
                                <dt>
                                    <small>Account Type</small>
                                </dt>
                                <dd>
                                    <small>{ data.accountType }</small>
                                </dd>
                                <dt>
                                    <small>Account Status</small>
                                </dt>
                                <dd>
                                    <small>{ data.accountStatus }</small>
                                </dd>
                                <dt>
                                    <small>Phone</small>
                                </dt>
                                <dd>
                                    <small>{ data.phone }</small>
                                </dd>
                                <dt>
                                    <small>Created At</small>
                                </dt>
                                <dd>
                                    <small>{ data.generationDate }</small>
                                </dd>
                                <dt>
                                    <small>Execution Time</small>
                                </dt>
                                <dd>
                                    <small>{ moment(data.executionTime).format('LLL') }</small>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-3">
                            { category !== null ? <ul className="list-group" style={ {marginBottom: 0} }>
                                { Object.keys(category).map(i =>
                                    <li className="list-group-item"
                                        style={ {padding: '5px 15px'} } key={ i }>
                                    <span className={ 'badge badge-' + category[i].style }
                                          style={ {marginTop: 2} }>{ category[i].count }</span>
                                        <small>{ i }</small>
                                    </li>
                                ) }
                                </ul> : null }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default StatementMetadata;