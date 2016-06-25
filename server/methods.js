//allows us to call methods on the server from the client
Meteor.methods({
  addResolution(resolution){

    check(resolution, String)

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
  cloneResolution(resolution){

    check(resolution, Object)

    //don't let someone not loggedin insert a resolution
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Resolutions.insert({
      text: resolution.text,
      complete: resolution.complete,
      createdAt: new Date(),
      user: resolution.user
    })
  },
  toggleResolution(resolution){

    check(resolution, Object)

    //must be owner of resolutions to toggle them
    if (Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized')
    }
    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete}
    })
  },
  randomResolutionCreation(){

    //res = Resolutions.aggregate( { $sample: { size: 1 } } )
    res = Resolutions.find();

    var rand = res[Math.floor(Math.random() * res.length)];

    console.log(rand.text)

    // Resolutions.insert({
    //   text: 'sdjlkfasdlkfjkldsf',
    //   complete: false,
    //   createdAt: new Date(),
    //   user: "tBzzDbKGaSTNfEiQQ"
    // })

    //what I have to do
    //I need to grab a random resolution and clone it but add the word lisa to the text
  },
  deleteResolution(resolution){

    check(resolution, Object)

    //must be owner of resolutions to delete them
    if (Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized')
    }
    Resolutions.remove(resolution._id)
  }
})
