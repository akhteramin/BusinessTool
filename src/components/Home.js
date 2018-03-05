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
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Title value="Dashboard"/>
                        <div className="row placeholders">
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                    width="200" height="200" className="img-responsive"
                                    alt="Generic placeholder thumbnail"/>
                                <h4>Label</h4>
                                <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                    width="200" height="200" className="img-responsive"
                                    alt="Generic placeholder thumbnail"/>
                                <h4>Label</h4>
                                <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                    width="200" height="200" className="img-responsive"
                                    alt="Generic placeholder thumbnail"/>
                                <h4>Label</h4>
                                <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                    width="200" height="200" className="img-responsive"
                                    alt="Generic placeholder thumbnail"/>
                                <h4>Label</h4>
                                <span className="text-muted">Something else</span>
                            </div>
                        </div>
                        <CampaignList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
