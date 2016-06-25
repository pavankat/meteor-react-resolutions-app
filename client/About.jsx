import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {

  setVar(){
    Session.set('test', 'session works!');
  }

  //you can set session variables across different pages and components with meteor
  //hit control + m to see the session variables
  triggerLogin() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render(){

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>About Us</h1>

        <p>Build good habits. Organize your life. Productive has all the tools you need to build a routine of positive, life changing habits. Productive gives you:</p>

        <ul>
          <li>A way to plan your day - Schedule habits for morning, afternoon, evening, or any time of the day. You can also schedule habits for more than once a day, or only for weekdays, or just for the start of the month, or just on Mondays, or many other convenient choices.</li>

          <li>Motivating streaks - Build motivating chains of done habits and perfect days. The longer your chain of done habits, the more likely you will stick at the habit.</li>

          <li>A way to focus - You&#39;re only shown what&#39;s due for the current time of day. This helps you better manage your time, and prevents stress about what is still left to do.</li>

          <li>Powerful reminders - Productive lets you know what&#39;s due for each time period, plus you can set reminders for each habit, or get a big push from Boost Mode.</li>

          <li>Lots more awesome stuff - Like calendars of your progress, detailed stats, notes, a passcode lock, and the beautiful Floodlight theme.</li>
        </ul>

        <button onClick={this.setVar}>Click Me to trigger something on the resolutions page</button>

        <button onClick={this.triggerLogin}>Want to login?</button>
      </ReactCSSTransitionGroup>
    )
  }
}
