import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routing'
import HomeController from './controllers/home'
import VenuesController from './controllers/venues'
import VenuesService from './services/fsq'
import MapsService from './services/maps'

angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('VenuesController', VenuesController) 
    .service('VenuesService', VenuesService)
    .service('MapsService', MapsService)
