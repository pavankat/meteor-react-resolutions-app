import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import Frankie from './Frankie.jsx'
import Nicole from './Nicole.jsx'

FlowRouter.route('/nicole', {
  action() {
    mount(MainLayout, {
      content : (<Nicole />)
    })
  }
});

FlowRouter.route('/frankie', {
  action() {
    mount(MainLayout, {
      content : (<Frankie />)
    })
  }
});

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

FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout, {
      content : (<ResolutionDetail id={params.id} />)
    })
  }
});
