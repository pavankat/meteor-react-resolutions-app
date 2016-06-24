import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
import App from '../App.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content : (<App />)
    })
  }
});
