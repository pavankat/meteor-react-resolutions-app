import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ResolutionsForm extends Component {
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
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input type="text" ref="resolution" placeholder="Enter your resolution" />  {/* this is a comment! ref is how we can refer to this input later */}

      </form>
    )
  }
}
