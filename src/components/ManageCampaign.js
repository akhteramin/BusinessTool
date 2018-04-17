import React, { Component } from 'react';

import Title from './Title';
import CampaignList from './CampaignList';

class ManageCampaign extends Component {
    render() {
        return (
            <div>
                <Title value="Dashboard"/>
                <CampaignList/>
            </div>
        );
    }
}

export default ManageCampaign;
