import angular from 'angular'
import uirouter from 'angular-ui-router'
import angularanimate from 'angular-animate' 
import routing from './routing'
import HomeController from './controllers/home'
import VenuesController from './controllers/venues'
import VenuesService from './services/fsq'

angular.module('app', [uirouter, angularanimate])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('VenuesController', VenuesController) 
    .service('VenuesService', VenuesService)
