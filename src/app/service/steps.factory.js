export function Steps(  $q, $firebaseArray ) {
  'ngInject'; 
  return {
    get: function(level = 0) {
      
      // console.log('Getting:', level);
      var defered = $q.defer();

      var ref = firebase.database().ref('levels').child(level);
      var r = $firebaseArray(ref);

      r.$loaded().then(
        x => {
          if(x.length) {
            defered.resolve( x[ Math.floor(Math.random() * x.length) ].$value )
          }else {
            defered.reject("No Results");
          }
        },
        x => defered.reject(x)
      );

      return defered.promise;
    }
  }
}
