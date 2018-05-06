import React, { Component } from 'react';
import numeral from 'numeral';
import Title from './Title';
import Http from '../services/Http';
import spinner from '../images/ajax-loader.gif';
import Notifications, {notify} from 'react-notify-toast';

class NotificationsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            targetReach:0,
            loader: false,
            description: '',
            targetGroupNotification: [],
            group:'',
            error: {
                name: false,
                description: false
            }
        };

        // this.toggleCriteria = this.toggleCriteria.bind(this);
        // this.updateCriteriaReach = this.updateCriteriaReach.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getNotificationTargetGroups = this.getNotificationTargetGroups.bind(this);
        this.clearData = this.clearData.bind(this)
    }
    
    getNotificationTargetGroups() {
        Http.GET('targetGroups')
        .then(({data}) => {
            console.log('Success targetGroups: ', JSON.stringify(data, null, 2));
            let targetGroupNotification = data
            
            this.setState({targetGroupNotification});
            
            console.log(this.state.targetGroupNotification)
        })
        .catch(error => console.error(error));
    }

    clearData() {
        this.setState({
            name:'',
            loader:'',
            description:'',
            group:'',
            targetReach:0
        })
    }

    isValidForm() {
        const {name, description,group} = this.state;
        return name && description && group ;
    }

    handleChange(event) {
       
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        if(target.type === 'select-one')
        {
            // this.state.group = value
            this.setState({
                group: value
            });
            var param = '/'+this.state.group+"/reach"
            Http.GET('targetGroups',param)
            .then(({data}) => {
                // this.state.targetReach=data.count
                this.setState({
                    targetReach: data.count
                });
                console.log(data)
            })
            .catch(error => console.error(error));
        }
            
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
    handleSubmit(event,type) {
        event.preventDefault();
        console.log(type)
        this.setState({
            loader : true
        })
        const {name, description,group} = this.state;
        console.log(name)
        console.log(description)
        console.log(group)
        if(type === 1)
        {
            const paramData={
                "content": description,
                "targetGroupId": [
                  Number(group)
                ],
                "title": name
            }
    
            Http.POST('notifyPush', paramData)
            .then(response => {
                console.log('Success push notification sent: ', JSON.stringify(response, null, 2));
                this.setState({
                    loader : false
                })
                let successColor = { background: '#5ac9b6', text: "#FFFFFF" };
                notify.show("Push notification has been sent successfully", "custom", 5000, successColor);
                this.clearData()
            })
            .catch(error => {
                console.error(error);
                let failColor = { background: '#fc4f2a ', text: "#FFFFFF" };
                notify.show("Push notification sent failed.", "custom", 5000, failColor);
                this.setState({
                    loader : false
                })
            });
        }
        else if(type === 2)
        {
            const paramData={
                "content": description,
                "targetGroupId": [
                    Number(group)
                ]
            }
    
            Http.POST('notifySms', paramData)
            .then(response => {
                console.log('Success push notification sent: ', JSON.stringify(response, null, 2));
                this.setState({
                    loader : false
                })
                let successColor = { background: '#5ac9b6', text: "#FFFFFF" };
                notify.show("SMS has been sent successfully", "custom", 5000, successColor);
                
                this.clearData()
            })
            .catch(error => {
                console.error(error);
                let failColor = { background: '#fc4f2a ', text: "#FFFFFF" };
                notify.show("SMS sent failed.", "custom", 5000, failColor);

                this.setState({
                    loader : false
                })
            });
        }
        
    }

    componentDidMount() {
        
        this.getNotificationTargetGroups();
    }

    render() {
        const {name, description,group,loader,targetReach} = this.state;
        return (
            <div>
                <Title value="Notify Users"/>
                <Notifications />
                <div className="row">
                <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Send SMS / Notification</h3>
                            </div>
                            <div className="panel-body">
                            { loader === true 
                                    ? <img src={ spinner } style={ {width: 20, height: 20} } alt="Ajax Loader"/>
                                    :''}
                                   
                                {/* <form name="SendNotification"> */}
                                        <div className='form-group'>
                                            <label className="control-label" htmlFor="name">Notification Name</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="name"
                                                   name="name"
                                                   value={ name }
                                                   onChange={ this.handleChange }
                                                   onBlur={ this.handleValidation }
                                                   placeholder="i.e. Offer Boishakh 2015"/>
                                        </div>
                                        
                                        <div className='form-group'>
                                            <label className="control-label" htmlFor="description">Description</label>
                                            <textarea className="form-control"
                                                      id="description"
                                                      name="description"
                                                      rows="3"
                                                      value={ description }
                                                      onChange={ this.handleChange }
                                                      onBlur={ this.handleValidation }
                                                      />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="group">Select Target group: <span className="badge pull-right">{ numeral(targetReach).format('0,0') }</span></label>
                                            <select className="form-control" value={ group } id="group"
                                            onChange={ this.handleChange }>
                                                <option>Select Your Target Group</option>
                                                {this.state.targetGroupNotification.map((group, index) => (
                                                    <option key={group.id} value={group.id}>{ group.name }</option>
                                                ))}
                                            </select>
                                        </div> 

                                        
                                        <button id="notification" type="submit" style={ {marginRight: 10} }
                                            onClick={ (e) =>  this.handleSubmit(e,1) }
                                            disabled={ !this.isValidForm() } className="btn btn-default">Send Notification
                                        </button>

                                        <button id="sms" type="submit"
                                            onClick={ (e) =>  this.handleSubmit(e,2) }
                                            disabled={ !this.isValidForm() } className="btn btn-primary">Send SMS
                                        </button>
                                    {/* </form>  */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <table className="table table-striped table-hover"
                                        style={ {marginBottom: 0} }>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>People Reach</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.targetGroupNotification.map((group, index) => (
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
        );
    }
}

export default NotificationsModule;