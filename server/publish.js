//import { Mongo } from 'meteor/mongo';

//export const

Resolutions = new Mongo.Collection("resolutions");
Movies = new Mongo.Collection("movies");
Songs = new Mongo.Collection("songs");


//giving all the resolutions
Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});

//giving all the movies
Meteor.publish("userMovies", function(){
  return Movies.find({user: this.userId});
});

//giving all the songs
Meteor.publish("userSongs", function(){
  return Songs.find({user: this.userId});
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns resolutions only for the current loggedin user
Meteor.publish("userResolutions", function(){
  return Resolutions.find({user: this.userId});
});
