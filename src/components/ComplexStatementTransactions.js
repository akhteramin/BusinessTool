import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import IPAYTransaction from './IPAYTransaction';
import { capitalizeFirstLetter, replaceSpace } from '../services/Util';
import { actionMap, categoryContainer } from '../constant';

const defaultIsChecked = categoryContainer.reduce((init, x) => Object.assign(init, {[x.value]: false}), {});

class ComplexStatementTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: defaultIsChecked,
            isCollapsed: props.config.isCollapsed
        };
        this.handelAction = this.handelAction.bind(this);
        this.toggleCollapseBtn = this.toggleCollapseBtn.bind(this);
    }

    handelAction(key) {
        this.setState({
            isChecked: defaultIsChecked
        });
        this.props.transfer(key);
    }

    handelExecute() {
        if (typeof this.props.execute === 'function') {
            this.props.execute();
        }
    }

    toggleCollapseBtn() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        const {transactions, name} = this.props;
        const {isCollapsed} = this.state;
        const list = transactions.filter(x => x.action === name);

        return (
            <div className="panel panel-default table-responsive">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title pull-left" style={ {paddingTop: 7.5} }>
                        { actionMap[name] + ' Transactions' } <span className="badge">{ list.length }</span>
                    </h3>

                    <div className="btn-group pull-right margin-left-5" role="group"
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

                    { name === 'EXECUTE'
                        ? <div className="btn-group pull-right" role="group"
                               aria-label="Action">
                            <button className="btn btn-default btn-sm"
                                    disabled={ !list.length }
                                    onClick={ () => this.handelExecute() }>Execute
                            </button>
                            <button className="btn btn-default btn-sm"
                                    disabled={ !list.length }
                                    onClick={ () => this.handelAction('SKIP') }>Skip
                            </button>
                        </div>
                        : <div className="btn-group pull-right" role="group"
                               aria-label="Action">
                            <button className="btn btn-default btn-sm"
                                    disabled={ !list.length }
                                    onClick={ () => this.handelAction('EXECUTE') }>Undo
                            </button>
                        </div>
                    }
                </div>
                <span className={ `collapse ${!isCollapsed ? 'in' : ''}` }
                      id={ `collapse-${replaceSpace(name)}` }>
                    {
                        list.length
                            ? categoryContainer.map(category => {
                                let listByCategory = list.filter(x => x.category === category.value);
                                if (category.value === 'FAILED') {
                                    listByCategory = listByCategory.sort((a, b) => a.groupId - b.groupId);
                                }
                                return (listByCategory.length ? <table className={ 'table ' + category.style }
                                                                       key={ category.value }
                                                                       style={ {marginBottom: 0} }>
                                    <caption className={ category.style }>
                                        { capitalizeFirstLetter(category.value) } Transactions
                                        <span className="badge margin-left-15">{ listByCategory.length }</span>
                                    </caption>
                                    <thead>
                                    <tr className="active">
                                        <th width="3%" className="text-center">
                                            <input type="checkbox"
                                                   checked={ this.state.isChecked[category.value] }
                                                   onChange={ () => {
                                                       this.setState({
                                                           isChecked: {
                                                               ...this.state.isChecked,
                                                               [category.value]: !this.state.isChecked[category.value]
                                                           }
                                                       });
                                                       this.props.parentCheckbox({
                                                           action: name,
                                                           category: category.value
                                                       }, this.state.isChecked[category.value]);
                                                   } }/>
                                        </th>
                                        <th width="8%" className="text-uppercase">Date</th>
                                        <th width="61%" className="text-uppercase">Narration</th>
                                        <th width="6%" className="text-uppercase text-center">Mode</th>
                                        <th width="6%" className="text-uppercase text-right">Debit</th>
                                        <th width="6%" className="text-uppercase text-right">Credit</th>
                                        <th width="10%" className="text-uppercase text-right">Balance</th>
                                    </tr>
                                    </thead>
                                    {
                                        listByCategory.map(({bankStatementTransaction: bank, iPayTransactions, config, groupId}, index) =>
                                            <tbody key={ config.id }>
                                            <tr className={ `pointer ${config.checked ? 'warning' : ''}` }>
                                                <td className="text-center">
                                                    <input type="checkbox"
                                                           checked={ config.checked }
                                                           onChange={ () => this.props.childCheckbox(config.id, groupId) }/>
                                                </td>
                                                <td data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>{ moment(bank.transactionDate).format('MMM DD, YYYY') }</small>
                                                </td>
                                                <td data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>{ bank.narration }</small>
                                                </td>
                                                <td className="text-center"
                                                    data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>{ bank.transactionMode }</small>
                                                </td>
                                                <td className="text-right"
                                                    data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>&#2547;{ numeral(bank.debitAmount).format('0,0.00') }</small>
                                                </td>
                                                <td className="text-right"
                                                    data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>&#2547;{ numeral(bank.creditAmount).format('0,0.00') }</small>
                                                </td>
                                                <td className="text-right"
                                                    data-toggle="collapse"
                                                    href={ `#collapse-${config.id}` }
                                                    aria-expanded="false"
                                                    aria-controls={ `collapse-${config.id}` }>
                                                    <small>&#2547;{ numeral(bank.balance).format('0,0.00') }</small>
                                                </td>
                                            </tr>
                                            <tr className="collapse" id={ `collapse-${config.id}` }>
                                                <td colSpan="7">
                                                    { iPayTransactions.map((iPayTransaction, i) =>
                                                        <div key={ i }>
                                                            <div className="row">
                                                                <div className="col-md-8 col-md-offset-2">
                                                                    <IPAYTransaction item={ iPayTransaction }/>
                                                                </div>
                                                            </div>
                                                            <hr style={ {margin: '0 10px -9px'} }/>
                                                        </div>
                                                    ) }
                                                </td>
                                            </tr>
                                            </tbody>
                                        ) }
                                </table> : null);
                            })
                            : <div className="panel-body">
                                <p className="text-muted" style={ {margin: 0} }>No data available...</p>
                            </div>
                    }
                </span>
            </div>
        );
    }
}

export default ComplexStatementTransactions;