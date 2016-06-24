import React from 'react';
import {render} from "react-dom";

Resolutions = new Mongo.Collection("resolutions");

//by having default, whatever imports this file, you don't need to use curly brackets when importing it
export default class App extends React.Component {

  addResolution(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var text = this.refs.resolution.value.trim();
    console.log(text)

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    })

    this.refs.resolution.value = ""; //clear the input after we submit
  }

  render(){
    return (
      <div>
        <h1>My Resolutions</h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input type="text" ref="resolution" placeholder="Enter your resolution" />  {/* this is a comment! ref is how we can refer to this input later */}

        </form>
      </div>
    )
  }
}

// if (Meteor.isClient) {
//   Meteor.startup(function(){
//     render(<App />, document.getElementById("render-target"));
//   });
// }
