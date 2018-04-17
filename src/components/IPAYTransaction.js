import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

import Bank from './Bank';

const IPAYTransation = (props) => {
    const {item} = props;
    return (
        <div>
            <Bank item={ item }/>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="text-center">
                            <small>Transaction ID</small>
                        </th>
                        <th className="text-center">
                            <small>Request Time</small>
                        </th>
                        <th className="text-center">
                            <small>Type</small>
                        </th>
                        <th className="text-center">
                            <small>Debit</small>
                        </th>
                        <th className="text-center">
                            <small>Credit</small>
                        </th>
                        <th className="text-center">
                            <small>Description</small>
                        </th>
                        <th className="text-center">
                            <small>Status</small>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center">
                            <small>{ item.transactionId }</small>
                        </td>
                        <td className="text-center">
                            <small>{ moment(item.requestTime).format('LLL') }</small>
                        </td>
                        <td className="text-center">
                            <small>{ item.serviceName }</small>
                        </td>
                        <td className="text-center">
                            <small>&#2547;{ numeral(item.debitAmount).format('0,0.00') }</small>
                        </td>
                        <td className="text-center">
                            <small>&#2547;{ numeral(item.creditAmount).format('0,0.00') }</small>
                        </td>
                        <td className="text-center">
                            <small>{ item.purpose || 'N/A' }</small>
                        </td>
                        <td className="text-center" style={ {paddingBottom: 7} }><span
                            className="label label-default">{ item.statusDescription }</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IPAYTransation;