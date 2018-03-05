import React, { Component } from 'react';

import Title from './Title';
import CampaignList from './CampaignList';
import Sidebar from './Sidebar'

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-9 col-md-10 main">
                        <Title value="Dashboard"/>
                        <CampaignList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
