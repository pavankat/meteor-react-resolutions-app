//allows us to call methods on the server from the client
Meteor.methods({
  addSong(song){
    check(song, String);

    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Songs.insert({
      text: song,
      user: Meteor.userId()
    })

  },
  addMovie(movie){
    check(movie, String);

    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Movies.insert({
      text: movie,
      user: Meteor.userId()
    })

  },
  addResolution(resolution){

    check(resolution, String)

    //don't let someone not loggedin insert a resolution
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    if (resolution == 'rambo'){
      throw new Meteor.Error('no-rambo')
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

      let res = Resolutions.find().fetch();
      let randomIndex = Math.floor( Math.random() * res.length );

      let randomRes = res[randomIndex];

      console.log(randomRes.text)

      Resolutions.insert({
        text: randomRes.text,
        complete: randomRes.complete,
        createdAt: new Date(),
        user: randomRes.user
      })

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
