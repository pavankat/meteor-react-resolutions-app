import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class ResolutionSingle extends Component {
  toggleChecked(){
    //console.log(this)
    Meteor.call('toggleResolution', this.props.resolution);
  }

  deleteResolution(){
    Meteor.call('deleteResolution', this.props.resolution);
  }

  render(){
    return (
      <li id="{this.props.resolution._id}">
        <input type="checkbox" readOnly={true} checked={this.props.resolution.complete} onClick={this.toggleChecked.bind(this)} /> {/* makes sure we're utilizing the correct this */}
        {this.props.resolution.text}
        <br /> {/* need the trailing / to make this work */}
        {this.props.resolution.complete.toString()}
        <button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>
        x
        </button>
      </li>
    )
  }
}
