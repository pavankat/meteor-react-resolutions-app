import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class Nicole extends Component {

  render(){

    return (
      <div>
        <h1>Nicole&#39;s hair is not wet {Session.get('david')}</h1>
        <h2>Nicole does not loves pizza with olives maybe</h2>
      </div>
    )
  }
}
