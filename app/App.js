import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routers';

let root = document.getElementById('app');

ReactDOM.render( <Router>{routes}</Router>, root );
