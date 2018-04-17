import React, { Component } from 'react';
// import { Alert, AlertContainer } from 'react-bs-notifier';
import SimpleStatementTransactions from './SimpleStatementTransactions';
import ComplexStatementTransactions from './ComplexStatementTransactions';
import StatementMetadata from './StatementMetadata';
import Title from './Title';
import Alerts from './Alerts';
import Modal from './Modal';
import Http from '../services/Http';
import spinner from '../images/ajax-loader.gif';

const defaultCategory = {
    SUCCESSFUL: {
        count: 0,
        style: 'success'
    },
    REVERTED: {
        count: 0,
        style: 'info'
    },
    FAILED: {
        count: 0,
        style: 'error'
    },
    UNMATCHED: {
        count: 0,
        style: 'warning'
    },
    DUPLICATE: {
        count: 0,
        style: 'primary'
    }
};

class SettlementReconciliation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null,
            modalIsOpen: false,
            count: {
                Matched: 0,
                Skipped: 0,
                Unmatched: 0,
                Duplicate: 0
            },
            category: defaultCategory,
            file: null,
            isLoading: false,
            bankStatementMetaData: null,
            transactionList: []
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onExecute = this.onExecute.bind(this);
        this.onConfirmModal = this.onConfirmModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.transfer = this.transfer.bind(this);
        this.handelParentCheckbox = this.handelParentCheckbox.bind(this);
        this.handelChildCheckbox = this.handelChildCheckbox.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit

        this.setState({
            isLoading: true
        });

        Http.UPLOAD('bank_statement', {
            name: 'bankStatement',
            file: this.state.file
        })
        .then((response) => {
            console.log('Upload Success: ', JSON.stringify(response.data, null, 2));

            const {bankStatementMetaData, transactionList} = response.data;
            let {category} = this.state;
            /*
            * Copy `status` in `action` && `index` in `id`
            * */
            const transactions = transactionList.map((item, index) => {
                    category[item.category].count++;
                    return {
                        config: {
                            id: index,
                            checked: false
                        },
                        ...item,
                        action: item.status === 'MATCHED' ? 'EXECUTE' : item.status
                    };
                }
            );
            this.setState(Object.assign(this.state, {
                bankStatementMetaData,
                transactionList: transactions,
                isLoading: false,
                category
            }));
        })
        .catch(({response}) => {
            console.error('Upload Error: ', JSON.stringify(response.data, null, 2));

            this.setState({
                isLoading: false,
                alert: {
                    message: response.data.message,
                    type: 'danger'
                }
            });
        });
    }

    onExecute() {
        const {transactionList, category: {UNMATCHED, DUPLICATE}} = this.state;
        let Matched = 0, Skipped = 0;

        transactionList.forEach(({action}) => {
            switch (action) {
                case 'EXECUTE':
                    Matched++;
                    break;
                case 'SKIP':
                    Skipped++;
                    break;
                default:
                    console.warn('No valid action found: ', action);
                    break;
            }
        });

        this.setState({modalIsOpen: true, count: {Matched, Skipped, Unmatched: UNMATCHED.count, Duplicate: DUPLICATE.count}});
    }

    onConfirmModal() {
        const {bankStatementMetaData, transactionList} = this.state;
        Http.PUT('bank_statement', {bankStatementMetaData, transactionList})
        .then(response => {
            console.log('Execute Success: ', JSON.stringify(response.data, null, 2));

            this.setState({
                alert: {
                    message: response.data.message,
                    type: 'success'
                },
                modalIsOpen: false
            });
        })
        .catch(error => {
            console.error('Execute Error: ', JSON.stringify(error, null, 2));

            this.setState({
                alert: {
                    message: error.data.message,
                    type: 'danger'
                },
                modalIsOpen: false
            });
        });

    }

    onCloseModal() {
        this.setState({modalIsOpen: false});
    }

    onChange(e) {
        const [file] = e.target.files;
        // this.setState(Object.assign({}, {file}));
        this.setState({file});
        console.log('Chosen File: ', this.state);
    }

    onReset(e) {
        // e.preventDefault();
        // this.setState(Object.assign({}, {file: null}, this.state));
        this.setState({
            file: null,
            bankStatementMetaData: null,
            transactionList: [],
            category: defaultCategory
        });
        console.log('Reset File: ', this.state);
    }

    transfer(action) {
        console.log('Skip Transactions');
        const {transactionList} = this.state;

        const transactions = transactionList.map(item => {
            if (item.config.checked) {
                item.action = action;
                item.config.checked = false;
            }
            return item;
        });

        this.setState({
            transactionList: transactions
        });
    }

    handelChildCheckbox(id, groupId) {
        const {transactionList} = this.state;

        const transactions = transactionList.map(item => {
            if (item.config.id === id || (groupId > 0 && item.groupId === groupId)) {
                item.config.checked = !item.config.checked;
            }
            return item;
        });

        this.setState({
            transactionList: transactions
        });
    }

    handelParentCheckbox({action, category}, isChecked) {
        console.log('handelParentCheckbox: ', action, category, isChecked);
        const {transactionList} = this.state;

        const transactions = transactionList.map(item => {
            if (item.action === action && item.category === category) {
                item.config.checked = !isChecked;
            }
            return item;
        });

        this.setState({
            transactionList: transactions
        });
    }

    // componentWillMount() {
    //     const {bankStatementMetaData, transactionList} = Http.GET_TRANSACTIONS();
    //
    //     /*
    //     * Copy `status` in `action` && `index` in `id`
    //     * */
    //     const transactions = transactionList.map((item, index) => ({
    //             config: {
    //                 id: index,
    //                 checked: false
    //             },
    //             ...item,
    //             action: item.status === 'MATCHED' ? 'EXECUTE' : item.status
    //         })
    //     );
    //     this.setState(Object.assign(this.state, {
    //         bankStatementMetaData,
    //         transactionList: transactions
    //     }));
    // }

    render() {
        const file_name = this.state.file ? this.state.file.name : '';
        const {bankStatementMetaData, transactionList, alert, modalIsOpen, count, category, isLoading} = this.state;

        return (
            <div>
                <Title value="Settlement and Reconciliation"/>
                { alert ? <div className="row">
                    <div className="col-md-12">
                        <Alerts type={ alert.type } value={ alert.message }/>
                    </div>
                </div> : null }

                { /*<AlertContainer position="top-right"><Alert type="info" headline="Oh Some Info">Something happened of only moderate importance.</Alert></AlertContainer>*/ }

                <div className="row">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading clearfix">
                                <h3 className="panel-title pull-left"
                                    style={ {padding: '7.5px 0'} }>Upload Bank Statement</h3>
                                { isLoading ? <img src={ spinner } className="pull-right" style={ {
                                    width: 20,
                                    height: 20,
                                    marginTop: 5,
                                    marginRight: 10
                                } } alt="Ajax Loader"/> : null }
                            </div>
                            <div className="panel-body">
                                <form onSubmit={ this.onFormSubmit }>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <label className="input-group-btn">
                                            <span className="btn btn-default">
                                                Browse&hellip; <input type="file"
                                                                      accept=".xls,.xlsx"
                                                                      style={ {'display': 'none'} }
                                                                      onChange={ this.onChange }/>
                                            </span>
                                            </label>
                                            <input type="text"
                                                   className="form-control"
                                                   value={ file_name } readOnly/>
                                        </div>
                                        <span className="help-block">
                                            <small>File type must be - XLS</small>
                                        </span>
                                    </div>

                                    <div className="btn-group" role="group">
                                        <button type="submit"
                                                className="btn btn-default btn-sm"
                                                disabled={ !file_name }>
                                            Upload
                                        </button>
                                        <button className="btn btn-default btn-sm"
                                                disabled={ !file_name }
                                                onClick={ this.onReset }>
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-offset-1">
                        { bankStatementMetaData ? <StatementMetadata data={ bankStatementMetaData }
                                                                     title="Bank Statement (Metadata)"
                                                                     category={ category }/> : null }
                    </div>
                </div>

                { transactionList.length ? <div className="row">
                    <div className="col-md-12">
                        <ComplexStatementTransactions name="EXECUTE"
                                                      transfer={ this.transfer }
                                                      childCheckbox={ this.handelChildCheckbox }
                                                      parentCheckbox={ this.handelParentCheckbox }
                                                      transactions={ transactionList }
                                                      execute={ this.onExecute }
                                                      config={ {
                                                          isCollapsed: false
                                                      } }/>
                        <ComplexStatementTransactions name="SKIP"
                                                      transfer={ this.transfer }
                                                      childCheckbox={ this.handelChildCheckbox }
                                                      parentCheckbox={ this.handelParentCheckbox }
                                                      transactions={ transactionList }
                                                      config={ {
                                                          isCollapsed: false
                                                      } }/>
                        <SimpleStatementTransactions name="Unmatched Transactions"
                                                     list={ transactionList.filter(x => x.action === 'UNMATCHED') }
                                                     config={ {
                                                         isCollapsed: true,
                                                         isProcessed: false
                                                     } }/>
                        <SimpleStatementTransactions name="Duplicate Transactions"
                                                     list={ transactionList.filter(x => x.action === 'DUPLICATE') }
                                                     config={ {
                                                         isCollapsed: true,
                                                         isProcessed: false
                                                     } }/>
                    </div>
                </div> : null }

                <Modal id={ `Execute_Modal` }
                       title={ `Confirm Execute Settlement` }
                       show={ modalIsOpen }
                       action={ {
                           confirm: this.onConfirmModal,
                           close: this.onCloseModal
                       } }>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <table className="table table-hover" style={ {marginBottom: 0} }>
                                <caption style={ {borderBottom: 'none', padding: 8} }>Number of Transactions</caption>
                                <thead>
                                <tr>
                                    <th width="40%"/>
                                    <th width="60%"/>
                                </tr>
                                </thead>
                                <tbody>
                                { Object.keys(count).map(key =>
                                    <tr key={ key }>
                                        <th scope="row">{ key }</th>
                                        <td>{ count[key] }</td>
                                    </tr>
                                ) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default SettlementReconciliation;