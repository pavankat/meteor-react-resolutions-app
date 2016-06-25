import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content : (<ResolutionsWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content : (<About />)
    })
  }
});
