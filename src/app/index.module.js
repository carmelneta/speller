
import { config } from './index.config';
import { runBlock } from './index.run';
import { routerConfig } from './index.route';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './components/home/home.component';

import { Images } from './service/image.factory'; 
import { Steps } from './service/steps.factory'; 

angular.module('speller', ['ui.router', 'firebase','ngSanitize', 'ngMessages', 'ngAria', 'ngMaterial'])
  .config(config)
  .run(runBlock)
  .config(routerConfig)

  .component('main.component', MainComponent)
  .component('home.component', HomeComponent)

  .factory('images', Images)
  .factory('Steps', Steps)
;