import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class ResolutionsForm extends Component {
  addMovie(event){
    event.preventDefault();
    let text = this.refs.movie.value.trim();

    if (text){
        Meteor.call('addMovie', text);
        this.refs.movie.value = '';
    }
  }
  addResolution(event){
    event.preventDefault();

    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var text = this.refs.resolution.value.trim();

    //by taking out insecure, you can't do this anymore
    // Resolutions.insert({
    //   text: text,
    //   complete: false,
    //   createdAt: new Date()
    // })

    //executing the method in methods.js from server.js
    //()=> let's us use the scope from above the anonymous function inside the anonymous function, so we can access this above the anonymous function

    if (text == 'david'){
      Bert.alert( 'David is watching the screen with his macbook open.' );
    }else if (text){
      Meteor.call('addResolution', text, (error, data)=>{
        console.log('this is the error', error)
        if (error){
          Bert.alert( 'no rambo', 'danger', 'fixed-top', 'fa-frown-o' );
        }

        // if (error){
        //   Bert.alert( 'You must be logged in to add a resolution', 'danger', 'fixed-top', 'fa-frown-o' );
        // }else {
        //   this.refs.resolution.value = ""; //clear the input after we submit
        // }
      })
    }else{
      Bert.alert( 'You must type some text in to add a resolution', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <div>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input type="text" ref="resolution" placeholder="Enter your resolution" />  {/* this is a comment! ref is how we can refer to this input later */}

        </form>

        <form className="new-movie" onSubmit={this.addMovie.bind(this)}>
          <input type="text" ref="movie" placeholder="Enter your movie" />

          {/* this is a comment! ref is how we can refer to this input later */}

        </form>
      </div>
    )
  }
}
