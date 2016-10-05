export function Images( $http, $q ) {
  'ngInject'; 
  let auth = 'Basic ZTU0YTIxOGJmOGFkMzRhNmFhNGE6YjFiZmZlMDU2NzFkMDRlZmIzMDM1OWUyNDcwMTdhYmI5ZjQxMDhmYg';

  return {
    search : ( query ) => {
      console.log();
      var defered = $q.defer();
      var req = {
        method: 'GET',
        url: 'https://api.shutterstock.com/v2/images/search?query=' + query,
        headers: { 'Authorization': auth }
      };


      $http(req).then(
        x => { 
          if(x.data.data.length) {
            defered.resolve( x.data.data[0].assets.preview.url );
          }else {
            defered.reject(x);
          }
        },
        x => { 
          console.log(x);
          defered.reject(x);
        }
      );

      return defered.promise;
    }
  }
}
