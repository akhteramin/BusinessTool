import React, { Component } from 'react';
import Subtitle from './Subtitle';
import Header from './Header';
import Http from '../services/Http'
class CreateCampaign extends Component {
    constructor(props) {
        super(props)
        this.backHome=this.backHome.bind(this)
        this.handleCampaign=this.handleCampaign.bind(this)
    }
    backHome=()=> {
        this.props.history.push('/app/home')
    }
    handleCampaign=(event)=>{
        event.preventDefault()
        const data = new FormData(event.target)
        Http.GET('get_posts')
          .then(
            ({data: data}) => {
              console.log(data)
            },
            error => {
              console.log('Error in address update, error: ', error)
            }
          )
        
    }
    render() {
        return (
            <div className="row">
                <Header/>
                <div className="col-md-12">
                    <div className="col-md-6 col-md-offset-3">
                    <Subtitle value="New Campaign"/>
                    <form onSubmit={this.handleCampaign}>
                        <div className="form-group">
                            <label>Campaign Name</label>
                            <input type="email" className="form-control" name="campaignName" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label>Service List</label>
                            <input type="password" className="form-control" name="serviceList" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label>Campaign File</label>
                            <div class="fileUpload">
                                <input id="uploadBtn3" type="file" class="btn btn-default"/>
                            </div>
                                <p className="help-block">csv/excel accepted only</p>
                        </div>
                       
                        <div className="text-center">
                            <button type="submit" className="btn btn-default">Create Campaign</button>
                            <button onClick={this.backHome} className="btn btn-danger margin-left-5">Cancel</button>

                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCampaign;
