import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class ResolutionSingle extends Component {
  render(){

    return (
      <li id="{this.props.resolution._id}">
        {this.props.resolution.text}
        <br /> {/* need the trailing / to make this work */}
        {this.props.resolution.complete.toString()}
      </li>
    )
  }
}
