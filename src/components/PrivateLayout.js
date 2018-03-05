import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const PrivateLayout = ({children, ...rest}) => {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-9 col-md-10 main">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;