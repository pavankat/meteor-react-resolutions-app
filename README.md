# map of how this works

routes.js
  so we take in request and go to that file and render the component specified there
    inside of that component, we could be rendering other components.

    let's say you have a form that's rendered in the component
      you can take the values from the form and insert that into your mongo collection using Meteor.call('methodNameGoesHere')/ methodNameGoesHere is a method inside of methods.js in your server folder.


because we have autopublish removed - we have to set up publications and subscriptions to tell what is available to our browser
  we have to setup a publication in publish.js in our server folder saying what is allowed to go on the browser

  then in our jsx file in the client folder we have to subscribe to that publication and then we used this subscription to display the data from the collection onto the page.





# installation errors and how to fix them

if you see an error like this
```
CracBook-Pro:meteor-react-resolutions-app-master swerve$ meteor
[[[[[ ~/RCB/Week21/21.3/meteor-react-resolutions-app-master ]]]]]              
=> Started proxy.                             
=> Started MongoDB.                           
=> Errors prevented startup:                                                    
  While downloading msavin:jetsetter@2.0.0...:
  error: ETIMEDOUT

  While downloading npm-bcrypt@0.8.6_1...:
  error: ETIMEDOUT

=> Your application has errors. Waiting for file change.
=> Meteor 1.3.4.1 is available. Update this project with 'meteor update'.
```

Then run meteor run
```
CracBook-Pro:meteor-react-resolutions-app-master swerve$ meteor run
[[[[[ ~/RCB/Week21/21.3/meteor-react-resolutions-app-master ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Meteor 1.3.4.1 is available. Update this project with 'meteor update'.
=> Started your app.                                                            

=> App running at: http://localhost:3000/
=> Client modified -- refreshing (x5)
```

-----


# How I made this meteor app

with meteor 1.3 - we can use npm packages

npm init

npm install --save react
npm install --save react-dom

now we install flow-router from atmosphere - which is Meteor's packages

you can find this command from the meteor atmosphere site atmospherejs.com/kadira/flow-router

meteor add kadira:flow-router

after this is done, you can see it in the packages file of the .meteor folder

npm install --save react-mounter
meteor add meteortoys:allthings
ctrl + m to hide

getMeteorData() and mixins aren't viable solutions for Meteor 1.3 which is what we're using right now. They're solid for previous verions of Meteor.

meteor add ultimatejs:tracker-react

meteor add stolinski:stylus-multi
- this has styles - we still have to make styles.styl

## security
anyone can come to your site and add, view your database from your console.
Resolutions.insert({text: "sup", complete: 0})
- would insert a resolution but for some reason didn't for me the second time around - probably because I removed the insecure package

now check your database, you'll see that it got put there.

meteor remove insecure
- really great for working on a prototype

but after you take that out, you can't have your addResolution function in ResolutionsForm.jsx file on the front end.

so you leverage Meteor.methods
we made a methods.js file in the server folder.

## remove autopublish
autopublish allows everyone to have access to everyone's resolutions

Resolutions.find() - would return all the data - for some reason doesn't for me

so we'll remove that

meteor remove autopublish

## adding accounts

meteor add accounts-ui
meteor add accounts-password

after putting in the pieces AccountsUI.jsx and the edit to MainLayout.jsx, you're done - you go into the console of chrome and if you sign up you can do Meteor.userId() and see the user id of the logged in user

## notifications

meteor add themeteorchef:bert

https://github.com/themeteorchef/bert

## settings

settings.json file good to store your api keys and what not
- we're going to push it up anyway, but you should add it to your .gitignore file.

after making it, restart your server with this command: meteor --settings settings.json

then in console you can do Meteor.settings.public.test

private is available only on the server
public is available everywhere

## security
meteor add check

it allows us to check our code before it goes on our servers

so if anything comes into a method other than a string we don't want it in there. This is because anyone can enter anything into our forms now. Perhaps an object, etc.

so in the console if I did Meteor.call('addResolution', 22) //this will fail

an alternative to check is the simple schema meteor package

## animations

npm install --save react-addons-css-transition-group

dynamically adds classes onto elements for us
