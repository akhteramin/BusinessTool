import React, { Component } from 'react';
import numeral from 'numeral';
import Http from '../services/Http';
import Title from './Title';
import spinner from '../images/ajax-loader.gif';

class TargetGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            isActive: true,
            logicalCriteriaList: [], // Selected Criteria's id
            criteria: {},
            targetReach: 0,
            error: {
                name: false,
                description: false
            },
            targetGroup: []
        };

        this.toggleCriteria = this.toggleCriteria.bind(this);
        this.updateCriteriaReach = this.updateCriteriaReach.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTargetGroups = this.getTargetGroups.bind(this);
    }

    toggleCriteria(name, id) {
        let {logicalCriteriaList: list} = this.state;

        let index = list.indexOf(id);
        if (index > -1) {
            list.splice(index, 1);
        } else {
            list.push(id);
        }

        // Update isChecked of corresponding id
        this.setState(({criteria}) => ({
            criteria: {
                ...criteria,
                [name]: criteria[name].map(obj => obj.id === id ? {...obj, isChecked: !obj.isChecked} : obj)
            },
            logicalCriteriaList: list
        }));

        this.updateCriteriaReach();
    }

    updateCriteriaReach() {
        const {logicalCriteriaList: list} = this.state;

        if (list.length) {
            Http.GET('getCriteria', `/${list.join(',')}/reach`)
            .then(({data}) => {
                console.log('Reach Count: ', data.count);
                this.setState({
                    targetReach: data.count
                });
            })
            .catch(error => console.error(error));
        }
    }

    handleChange(event) {
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;

        this.setState({
            [name]: value
        });
    }

    handleValidation(event) {
        const {name} = event.target;
        this.setState(previous_state => ({
            error: {
                ...previous_state.error,
                [name]: !this.state[name]
            }
        }));
    }

    isValidForm() {
        const {name, description, logicalCriteriaList} = this.state;
        return name && description && logicalCriteriaList.length;
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, description, logicalCriteriaList, isActive} = this.state;
        // console.log('Submit: ', JSON.stringify({name, description, logicalCriteriaList, isActive}, null, 2));

        Http.POST('targetGroups', {name, description, logicalCriteriaList, isActive, id: null})
        .then(response => {
            console.log('Success create TG: ', JSON.stringify(response, null, 2));
            this.getTargetGroups();
        })
        .catch(error => console.error(error));
    }

    getTargetGroups() {
        Http.GET('targetGroups')
        .then(({data}) => {
            console.log('Success targetGroups: ', JSON.stringify(data, null, 2));
            let targetGroup = data
            
            this.setState({targetGroup});
            console.log(this.state.targetGroup)
        })
        .catch(error => console.error(error));
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

        this.getTargetGroups();
    }

    render() {
        const {name, description, isActive, criteria, targetReach, error} = this.state;
        return (
            <div>
                <Title value="Target Group"/>
                <div className="row">
                    <div className="col-md-4">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Create Target Group</h3>
                            </div>
                            <div className="panel-body">
                                { Object.keys(criteria).length === 0 && criteria.constructor === Object
                                    ? <img src={ spinner } style={ {width: 20, height: 20} } alt="Ajax Loader"/>
                                    : <form name="AddTargetGroup" onSubmit={ this.handleSubmit }>
                                        <div className={ 'form-group'.concat(error.name ? ' has-error' : '') }>
                                            <label className="control-label" htmlFor="name">TG Name</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="name"
                                                   name="name"
                                                   value={ name }
                                                   onChange={ this.handleChange }
                                                   onBlur={ this.handleValidation }
                                                   placeholder="i.e. Verified Personal Users"
                                                   aria-describedby="helpTGName"/>
                                            { error.name ? <span id="helpTGName"
                                                                 className="help-block"
                                                                 style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>TG Name Required</small>
                            </span> : null }
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="criteria">TG Criteria</label>
                                            <span className="badge pull-right">{ numeral(targetReach).format('0,0') }</span>
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    { Object.keys(criteria).map((item, i) =>
                                                        <dl key={ item }>
                                                            <dt>{ `${(i + 1)}.  ${item}` }</dt>
                                                            <dd>
                                                                <ul className="list-unstyled margin-left-15">
                                                                    { criteria[item].map(({id, value, isChecked}) =>
                                                                        <li key={ id }>
                                                                            <div className="checkbox margin-5">
                                                                                <label>
                                                                                    <input type="checkbox"
                                                                                           checked={ isChecked }
                                                                                           onChange={ () => this.toggleCriteria(item, id) }/> { value }
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    ) }
                                                                </ul>
                                                            </dd>
                                                        </dl>
                                                    ) }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ 'form-group'.concat(error.description ? ' has-error' : '') }>
                                            <label className="control-label" htmlFor="description">Description</label>
                                            <textarea className="form-control"
                                                      id="description"
                                                      name="description"
                                                      rows="3"
                                                      value={ description }
                                                      onChange={ this.handleChange }
                                                      onBlur={ this.handleValidation }
                                                      aria-describedby="helpDescription"/>
                                            { error.description ? <span id="helpDescription"
                                                                        className="help-block"
                                                                        style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>Description Required</small>
                            </span> : null }
                                        </div>
                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label htmlFor="isActive">
                                                    <input type="checkbox"
                                                           id="isActive"
                                                           name="isActive"
                                                           checked={ isActive }
                                                           onChange={ this.handleChange }/>
                                                    <small style={ {marginTop: 2, display: 'block'} }>Active</small>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit"
                                                className="btn btn-default"
                                                disabled={ !this.isValidForm() }>Submit
                                        </button>
                                    </form> }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Target Group List</h3>
                            </div>
                            <table className="table table-striped table-hover"
                                   style={ {marginBottom: 0} }>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Criteria</th>
                                    <th>People Reach</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.targetGroup.map((group, index) => (
                                        <tr key={group.id}>
                                            <td width="20">{group.name}</td>
                                            <td width="30">{group.description}</td>
                                            <td width="40">
                                             {group.logicalCriteriaList.map((criteria, index) => (
                                                <p key={criteria.id}>
                                                    {criteria.criterionName}: {criteria.displayValue}, 
                                                </p>
                                             ))}
                                            </td>
                                            <td width="40">{group.reach}</td>
                                        </tr>
                                    ))}
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TargetGroup;