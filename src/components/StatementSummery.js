import React, { Component } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
        text: 'My stock chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
};

class StatementSummery extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <HighchartsReact
                        highcharts={ Highcharts }
                        constructorType={ 'stockChart' }
                        options={ options }/>
                </div>
            </div>

        );
    }
}

export default StatementSummery;