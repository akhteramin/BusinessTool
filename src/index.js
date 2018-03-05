import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/sass/stylesheets/styles.css';

import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
// import store, { history } from './store'
// import App from './containers/app'

// import './styles/index.css'

// const target = document.querySelector('#root')

// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <App />
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     target
// )
