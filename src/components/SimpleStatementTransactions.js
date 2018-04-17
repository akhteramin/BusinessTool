import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { replaceSpace } from '../services/Util';
import { statusMap } from '../constant';

class SimpleStatementTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: props.config.isCollapsed
        };

        this.toggleCollapseBtn = this.toggleCollapseBtn.bind(this);
    }

    toggleCollapseBtn() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        const {name, list, config} = this.props;
        const {isCollapsed} = this.state;

        return (
            <div className="panel panel-default table-responsive">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title pull-left"
                        style={ {paddingTop: 7.5} }>
                        { name } <span className="badge">{ list.length }</span>
                    </h3>

                    <div className="btn-group pull-right" role="group"
                         aria-label="Action">
                        <button className="btn btn-default btn-sm"
                                type="button"
                                data-toggle="collapse"
                                data-target={ `#collapse-${replaceSpace(name)}` }
                                aria-expanded={ !isCollapsed }
                                aria-controls={ `collapse-${replaceSpace(name)}` }
                                onClick={ this.toggleCollapseBtn }
                                title={ isCollapsed ? 'Expand' : 'Collapse' }>
                            <i style={ {top: 2.5} }
                               className={ `glyphicon glyphicon-chevron-${isCollapsed ? 'down' : 'up'}` }/>
                        </button>
                    </div>
                </div>
                <span className={ `collapse ${!isCollapsed ? 'in' : ''}` }
                      id={ `collapse-${replaceSpace(name)}` }>
                            { list.length
                                ? <table className="table table-striped table-hover"
                                         style={ {marginBottom: 0} }>
                                    <thead>
                                    <tr>
                                        <th width="3%">#</th>
                                        <th width={ config.isProcessed ? '10%' : '8%' }
                                            className="text-uppercase">Date
                                        </th>
                                        <th width={ config.isProcessed ? '48%' : '61%' }
                                            className="text-uppercase">
                                            Narration
                                        </th>
                                        <th width={ config.isProcessed ? '5%' : '6%' }
                                            className="text-uppercase text-center">Mode
                                        </th>
                                        <th width="6%" className="text-uppercase text-right">Debit
                                        </th>
                                        <th width="6%" className="text-uppercase text-right">
                                            Credit
                                        </th>
                                        <th width="10%" className="text-uppercase text-right">
                                            Balance
                                        </th>
                                        { config.isProcessed ? <th width="7%" className="text-uppercase text-center">
                                            Action
                                        </th> : null }
                                        { config.isProcessed ? <th width="5%" className="text-uppercase text-center">
                                            { /*Status*/ }
                                        </th> : null }
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { list.map(({bankStatementTransaction: item}, index) =>
                                        <tr key={ index }>
                                            <td>
                                                <small>{ index + 1 }</small>
                                            </td>
                                            <td>
                                                <small>{ moment(item.transactionDate).format('MMM DD, YYYY') }</small>
                                            </td>
                                            <td>
                                                <small>{ item.narration }</small>
                                            </td>
                                            <td className="text-center">
                                                <small>{ item.transactionMode }</small>
                                            </td>
                                            <td className="text-right">
                                                <small>&#2547;{ numeral(item.debitAmount).format('0,0.00') }</small>
                                            </td>
                                            <td className="text-right">
                                                <small>&#2547;{ numeral(item.creditAmount).format('0,0.00') }</small>
                                            </td>
                                            <td className="text-right">
                                                <small>&#2547;{ numeral(item.balance).format('0,0.00') }</small>
                                            </td>
                                            { config.isProcessed ? <td className="text-center">
                                                <small>{ item.action }</small>
                                            </td> : null }
                                            { config.isProcessed ? <td className="text-center">
                                                <i title={ statusMap[item.status].name }
                                                   className={ `glyphicon glyphicon-${statusMap[item.status].icon} text-${statusMap[item.status].color}` }
                                                   style={ {top: 4, fontSize: 18} }/>
                                            </td> : null }
                                        </tr>
                                    ) }
                                    </tbody>
                                </table>
                                : <div className="panel-body">
                                    <p className="text-muted" style={ {margin: 0} }>No data
                                        available...</p>
                                </div>
                            }
                        </span>
            </div>
        );
    }
}

export default SimpleStatementTransactions;