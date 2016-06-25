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
