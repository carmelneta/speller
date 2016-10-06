export function config ($logProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  var config = {
    apiKey: "AIzaSyDfv_mQT6W_rt4Woh-bpc1KypVCfHYA_c0",
    authDomain: "seller-34231.firebaseapp.com",
    databaseURL: "https://seller-34231.firebaseio.com",
    storageBucket: "seller-34231.appspot.com",
    messagingSenderId: "217791199652"
  };
  firebase.initializeApp(config);

}
