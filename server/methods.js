//allows us to call methods on the server from the client
Meteor.methods({
  addResolution(resolution){

    //don't let someone not loggedin insert a resolution
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    })
  },
  toggleResolution(resolution){
    //must be owner of resolutions to toggle them
    if (Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized')
    }
    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete}
    })
  },
  deleteResolution(resolution){
    //must be owner of resolutions to delete them
    if (Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized')
    }
    Resolutions.remove(resolution._id)
  }
})
