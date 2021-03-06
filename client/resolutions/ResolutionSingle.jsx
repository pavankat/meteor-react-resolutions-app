import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class ResolutionSingle extends Component {
  toggleChecked(){
    //console.log(this)
    Meteor.call('toggleResolution', this.props.resolution);
  }

  deleteResolution(){
    Meteor.call('deleteResolution', this.props.resolution);
  }

  cloneResolution(){
    Meteor.call('cloneResolution', this.props.resolution)
  }

  render(){
    const resolutionClass = this.props.resolution.complete ? "checked" : "";
    //console.log('resolutionClass', resolutionClass); //works

    const status = this.props.resolution.complete ? <span className=
    "completed">Completed</span> : "";

    return (
      <li className={resolutionClass} id={this.props.resolution._id}>
        <button className="btn-success" onClick={this.cloneResolution.bind(this)}>
        clone
        </button>
        <button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>
        x
        </button>

        <input type="checkbox" readOnly={true} checked={this.props.resolution.complete} onClick={this.toggleChecked.bind(this)} /> {/* makes sure we're utilizing the correct this */}
        {/* ${this.props.resolution._id} is string interpolation*/}
        <a href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
        <br /> {/* need the trailing / to make this work */}
        {/* uncomment this to see the status this.props.resolution.complete.toString() */}
        {status}

      </li>
    )
  }
}
