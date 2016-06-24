//allows us to call methods on the server from the client
Meteor.methods({
  addResolution(resolution){
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date()
    })
  }
})
