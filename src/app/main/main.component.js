class Ctrl {
  constructor ( $log ) {
    'ngInject';
    $log.log('Main Component');
  }
 
}


export const MainComponent = {
  templateUrl: 'app/main/main.component.html',
  controller: Ctrl
}