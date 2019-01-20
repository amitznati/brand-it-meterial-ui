import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/layout';
import * as serviceWorker from './serviceWorker';
import EditTemplate from './pages/editTemplate/editTemplate';

ReactDOM.render(<Dashboard><EditTemplate/></Dashboard>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
