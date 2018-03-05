import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Http from '../services/Http';

class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.backHome = this.backHome.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            offerType: '',
            offerName: ''
        };
    }

    backHome = () => {
        this.props.history.push('/app/home');
    };

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {offerType, offerName} = this.state;

        // const data = new FormData(e.target);
        // const data = e.target.value;

        console.log('Post Campaign: ', JSON.stringify({offerType, offerName}, null, 2));

        // Http.POST('offer', { offerType, offerName })
        // .then(
        //     ({data: data}) => {
        //         console.log(data);
        //     },
        //     error => {
        //         console.log('Error in address update, error: ', error);
        //     }
        // );
    };

    render() {
        const {offerType, offerName} = this.state;
        return (
            <div>
                <Title value="Create New Campaign"/>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        { /*<Subtitle value="New Campaign"/>*/ }
                        <form onSubmit={ this.handleSubmit }>
                            <div className="form-group">
                                <label>Offer Type</label>
                                <input type="text"
                                       className="form-control"
                                       name="offerType"
                                       id="offerType"
                                       placeholder="Offer Type"
                                       value={ offerType }
                                       onChange={ this.onChange }/>
                            </div>
                            <div className="form-group">
                                <label>Offer Name</label>
                                <input type="text"
                                       className="form-control"
                                       name="offerName"
                                       id="offerName"
                                       placeholder="Offer Name"
                                       value={ offerName }
                                       onChange={ this.onChange }/>
                            </div>

                            <button type="submit" className="btn btn-default">Create Campaign
                            </button>
                            <button onClick={ this.backHome }
                                    className="btn btn-danger margin-left-5">Cancel
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default CreateCampaign;
