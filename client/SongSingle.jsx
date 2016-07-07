import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class SongSingle extends Component {
  render(){

    return (
      <li id={this.props.song._id}>

        {this.props.song.text}

      </li>
    )
  }
}
