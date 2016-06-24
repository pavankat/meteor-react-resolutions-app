import React from 'react';
import {render} from "react-dom";

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    render(<App />, document.getElementById("render-target"));
  });
}
