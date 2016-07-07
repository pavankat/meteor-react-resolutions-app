import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ResolutionsForm extends Component {
  addSong(event){
    event.preventDefault();
    let text = this.refs.song.value.trim();

    if (text){
        Meteor.call('addSong', text);
        this.refs.song.value = '';
    }
  }

  render(){

    return (
      <div>
        <form className="new-song" onSubmit={this.addSong.bind(this)}>
          <input type="text" ref="song" placeholder="Enter your song" />  {/* this is a comment! ref is how we can refer to this input later */}

        </form>
      </div>
    )
  }
}
