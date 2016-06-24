import React from 'react';
import {render} from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm'
import ResolutionSingle from './ResolutionSingle'

Resolutions = new Mongo.Collection("resolutions");

//by having default, whatever imports this file, you don't need to use curly brackets when importing it
//we only use TrackerReact when we pull in data
export default class App extends TrackerReact(React.Component) {
//used to be (before TrackerReact): export default class App extends React.Component {

  resolutions() {
    return Resolutions.find().fetch(); //only .find() returns a cursor (meteor), .fetch returns us the object
  }

  render(){
    //console.log(this.resolutions()); //see this in the chrome console.

    let res = this.resolutions();

    //if we don't have this here then we can't display res on the page due to it not being available right away
    if (res.length < 1 ){
      return (<div>Loading</div>)
    }

    return (
      <div>
        <h1>My Resolutions</h1>

      <ResolutionsForm /> {/* we can copy and paste this more times throughout our app and it will work the same :) - that's the power of react components */}

        <div>
          <ResolutionSingle resolution={res[0]} />

        {/* comment this out: {res[0].text} */}
        </div>
      </div>
    )
  }
}

// if (Meteor.isClient) {
//   Meteor.startup(function(){
//     render(<App />, document.getElementById("render-target"));
//   });
// }
