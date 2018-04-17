import React from 'react';

const Bank = props => {
    const {item} = props;
    return (
        <div className="bank-item">
            <div className="bank-info">
                <div className="bank-logo">
                    <img
                        src={ require(`../images/bank/${item.bankCode}.png`) }
                        alt={ item.bankName }/>
                </div>
                <div className="bank-description">
                    <span
                        className="bank-title"> { item.branchName + ' BRANCH' } </span>
                    <h3 className="bank-name">
                        { item.bankName }
                        <small>
                            { item.bankAccountName }
                        </small>
                        <small>
                            { item.bankAccountNumber }
                        </small>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Bank;