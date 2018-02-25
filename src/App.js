import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

export default () => (
    <div>
        <Header/>
        <Routes />
        <Footer/>
    </div>
);
