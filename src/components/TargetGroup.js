import React, { Component } from 'react';
import Http from '../services/Http';
import Title from './Title';

class TargetGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: {},
            targetReach: 0
        };
        this.toggleCriteria = this.toggleCriteria.bind(this);
    }

    toggleCriteria(name, id) {
        console.log('Criteria ID for Toggle: ', id);

        // Update isChecked of corresponding id
        this.setState(({criteria}) => ({
            criteria: {
                ...criteria,
                [name]: criteria[name].map(x => {
                    if(x.id === id) {
                        return { ...x, isChecked: !x.isChecked};
                    }

                    return x;
                })
            }
        }));
    }

    componentDidMount() {
        Http.GET('getCriteria')
        .then(response => {

            let criteria = {};
            response.data.forEach(({id, criterionName: name, displayValue: value}) => {
                if (!criteria[name]) {
                    criteria[name] = [];
                }
                criteria[name].push({id, value, isChecked: false});
            });

            this.setState({criteria});
            // console.log('Success criteria: ', JSON.stringify(this.state.criteria, null, 2));
        })
        .catch(error => console.error(error));
    }

    render() {
        const {criteria, targetReach} = this.state;
        return (
            <div>
                <Title value="Target Group"/>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">TG Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="TG Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="criteria">TG Criteria</label>
                                <span className="badge pull-right">{targetReach}</span>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        { Object.keys(criteria).map((item, i) =>
                                            <dl key={item}>
                                                <dt>{ `${(i + 1)}.  ${item}` }</dt>
                                                <dd>
                                                    <ul className="list-unstyled margin-left-15">
                                                        {criteria[item].map(({id, value, isChecked}) =>
                                                            <li key={id}>
                                                                <div className="checkbox margin-5">
                                                                    <label>
                                                                        <input type="checkbox"
                                                                               checked={isChecked}
                                                                               onChange={() => this.toggleCriteria(item, id)}/> {value}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </dd>
                                            </dl>
                                        ) }

                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control"
                                          id="description"
                                          name="description"
                                          rows="4"/>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label htmlFor="isFacebookShare">
                                        <input type="checkbox"
                                               id="isFacebookShare"
                                               name="isFacebookShare"/>
                                        <small style={ {marginTop: 2, display: 'block'} }>Share in
                                            Facebook
                                        </small>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-7 col-md-offset-1">
                        Lorem
                    </div>
                </div>
            </div>
        );
    }
}

export default TargetGroup;

/*
[
    {
        "id": 1,
        "criterionName": "Account Type",
        "displayValue": "Personal",
        "bucket": "personal_members"
    },
    {
        "id": 2,
        "criterionName": "Account Type",
        "displayValue": "Business",
        "bucket": "business_members"
    },
    {
        "id": 3,
        "criterionName": "Verification Status",
        "displayValue": "Verified",
        "bucket": "verified_members"
    },
    {
        "id": 4,
        "criterionName": "Verification Status",
        "displayValue": "Not verified",
        "bucket": "not_verified_members"
    },
    {
        "id": 5,
        "criterionName": "Verification Status",
        "displayValue": "In Progress",
        "bucket": "in_progress_members"
    },
    {
        "id": 6,
        "criterionName": "Verification Status",
        "displayValue": "Rejected",
        "bucket": "rejected_members"
    },
    {
        "id": 7,
        "criterionName": "Profile Completion Score",
        "displayValue": "0%",
        "bucket": "profile_completion_score_0"
    },
    {
        "id": 8,
        "criterionName": "Profile Completion Score",
        "displayValue": "25%",
        "bucket": "profile_completion_score_25"
    },
    {
        "id": 9,
        "criterionName": "Profile Completion Score",
        "displayValue": "50%",
        "bucket": "profile_completion_score_50"
    },
    {
        "id": 10,
        "criterionName": "Profile Completion Score",
        "displayValue": "75%",
        "bucket": "profile_completion_score_75"
    },
    {
        "id": 11,
        "criterionName": "Profile Completion Score",
        "displayValue": "100%",
        "bucket": "profile_completion_score_100"
    },
    {
        "id": 12,
        "criterionName": "Mobile Operator",
        "displayValue": "Grameenphone",
        "bucket": "mobile_operator_gp"
    },
    {
        "id": 13,
        "criterionName": "Mobile Operator",
        "displayValue": "Robi",
        "bucket": "mobile_operator_grobi"
    },
    {
        "id": 14,
        "criterionName": "Mobile Operator",
        "displayValue": "Banglalink",
        "bucket": "mobile_operator_banglalink"
    },
    {
        "id": 15,
        "criterionName": "Mobile Operator",
        "displayValue": "Teletalk",
        "bucket": "mobile_operator_teletalk"
    }
]
*/