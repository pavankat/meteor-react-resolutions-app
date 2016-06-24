Resolutions = new Mongo.Collection("resolutions");

//giving all the resolutions
Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});
