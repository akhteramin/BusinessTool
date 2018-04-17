import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import Title from './Title';
// import Alerts from './Alerts';
import StatementMetadata from './StatementMetadata';
import SimpleStatementTransactions from './SimpleStatementTransactions';
import Http from '../services/Http';

import spinner from '../images/ajax-loader.gif';

class BankStatements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bank_statement: null,
            bank_statements: [],
            pagination: {},
            page: {
                index: 1,
                size: 10,
                fromDate: null,
                toDate: null
            },
            error: null,
            startDate: null,
            endDate: null,
            focusedInput: null
        };
        this.getStatement = this.getStatement.bind(this);
        this.getStatements = this.getStatements.bind(this);
        this.changePageIndex = this.changePageIndex.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.changeDateRange = this.changeDateRange.bind(this);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    getStatement(id) {
        Http.GET('bank_statement', `/${id}`)
        .then(response => {
            const {
                bankStatementMetaData,
                transactionList
            } = response.data;

            this.setState({
                bank_statement: {
                    bankStatementMetaData,
                    transactionList
                }
            });

            return this.props.history.push(`/app/bank-statements/${id}`);
        })
        .catch(({response}) => {
            console.error('Bank Statements with ID: ', JSON.stringify(response.data.message, null, 2));
            const [first_statement] = this.state.bank_statements;
            id = first_statement.id;
            this.getStatement(id);
        });
    }

    getStatements(shouldAppend = true) {
        const {index: page, size: limit, fromDate, toDate} = this.state.page;
        const payload = fromDate !== null && toDate !== null ? {
            page,
            limit,
            fromDate,
            toDate
        } : {page, limit};
        Http.GET('bank_statement', payload)
        .then(response => {
            const {totalCount, totalPages, hasNext, bankStatementFileList} = response.data;
            this.setState(({bank_statements}) => ({
                bank_statements: shouldAppend ? [...bank_statements, ...bankStatementFileList] : bankStatementFileList,
                pagination: {
                    totalCount,
                    totalPages,
                    hasNext
                }
            }));

            // If `bankStatementId` in param NOT undefined
            if (bankStatementFileList.length) {
                const {id} = this.props.match.params;
                this.getStatement(id);
            }

        })
        .catch(({response}) => {
            console.error('Bank Statements: ', response.data);
            this.setState({
                error: response.data.message
            });
        });

    }

    changePageIndex(event) {
        const {index} = this.state.page;

        this.setState({
            page: Object.assign(this.state.page, {index: index + 1})
        });

        /* Update this.state.bank_statements */
        this.getStatements(true);
    }

    changePageSize(event) {
        /* Reset Index to 1 (One) */
        this.setState({
            page: Object.assign(this.state.page, {index: 1, size: event.target.value})
        });

        /* Update this.state.bank_statements WITHOUT append */
        this.getStatements(false);
    }

    changeDateRange(startDate, endDate) {
        this.setState({
            page: Object.assign(this.state.page, {
                index: 1,
                fromDate: moment(startDate).valueOf(),
                toDate: moment(endDate).valueOf()
            })
        });

        /* Update this.state.bank_statements WITHOUT append */
        this.getStatements(false);
    }

    onDatesChange({startDate, endDate}) {
        this.setState({
            startDate,
            endDate
        });

        if (startDate !== null && endDate !== null) {
            this.changeDateRange(startDate, endDate);
        }
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    componentWillMount() {
        this.getStatements(false);
    }

    render() {
        const {bank_statement, bank_statements, pagination, page, error} = this.state;

        return (
            <div>
                <Title value="Bank Statements"/>
                <div className="row">
                    <div className="col-md-3">
                        { /*<div className={ (bank_statement !== null && bank_statements.length) || (page.fromDate !== null && page.toDate !== null) ? 'col-md-3' : 'col-md-12' }>*/ }
                        <div className="panel panel-default table-responsive scroll-bar">
                            <div className="panel-heading clearfix">
                                <h3 className="panel-title pull-left"
                                    style={ {padding: '7.5px 0'} }>
                                    Bank Statements { pagination.totalCount ? <span
                                    className="badge"> { pagination.totalCount } </span> : null }</h3>

                                <select className="form-control pull-right"
                                        style={ {width: 50, height: 30, fontSize: 12} }
                                        value={ page.size }
                                        onChange={ this.changePageSize }>
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>

                                { bank_statement === null && bank_statements.length ? <img src={ spinner } className="pull-right" style={ {
                                    width: 20,
                                    height: 20,
                                    marginTop: 5,
                                    marginRight: 10
                                } } alt="Ajax Loader"/> : null }
                            </div>

                            <div className="panel-body">
                                <div className="iPayDateRangePicker">
                                    <DateRangePicker
                                        startDate={ this.state.startDate }
                                        startDateId="start_date"
                                        endDate={ this.state.endDate }
                                        endDateId="end_date"
                                        onDatesChange={ this.onDatesChange }
                                        focusedInput={ this.state.focusedInput }
                                        onFocusChange={ this.onFocusChange }
                                        orientation="vertical"
                                        verticalHeight={ 568 }
                                        displayFormat="DD/MM/YYYY"
                                        showClearDates
                                        reopenPickerOnClearDates
                                        isOutsideRange={ () => false }
                                        block
                                    />
                                </div>
                            </div>

                            { bank_statements.length
                                ? <table className="table table-hover">
                                    <tbody>
                                    { bank_statements.map((item, index) =>
                                        <tr key={ index }
                                            className={ bank_statement && bank_statement.bankStatementMetaData.id === item.id ? 'pointer warning' : 'pointer' }
                                            onClick={ () => this.getStatement(item.id) }>
                                            <td className="text-left">
                                                <div>
                                                    { item.fileName }
                                                    <br/>
                                                    <small>{ `From ${item.period}` }</small>
                                                    <br/>
                                                    <small>{ item.generationDate }</small>
                                                </div>
                                            </td>
                                        </tr>
                                    ) }
                                    </tbody>
                                </table>
                                : <div className="panel-body">
                                    <p className={ error ? 'text-danger' : 'text-muted' }
                                       style={ {margin: 0} }>{ error || 'No data available...' }</p>
                                </div>
                            }
                        </div>

                        <button type="button"
                                className="btn btn-default btn-sm btn-block"
                                disabled={ !pagination.hasNext }
                                onClick={ this.changePageIndex }>
                            Load more ...
                        </button>
                    </div>
                    <div className="col-md-9">
                        { /*<div className={ (bank_statement !== null && bank_statements.length) || (page.fromDate !== null && page.toDate !== null) ? 'col-md-9' : '' }>*/ }
                        { bank_statement !== null ? <div>
                            <StatementMetadata data={ bank_statement.bankStatementMetaData }
                                               title="Bank Statement (Metadata)"
                                               category={null}/>
                            <SimpleStatementTransactions name="All Transactions"
                                                         list={ bank_statement.transactionList }
                                                         config={ {
                                                             isCollapsed: false,
                                                             isProcessed: true
                                                         } }/>
                        </div> : null }
                    </div>
                </div>
            </div>
        );
    }
}

export default BankStatements;