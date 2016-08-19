import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routing'
import HomeController from './controllers/home'
import VenuesController from './controllers/venues'

angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('VenuesController', VenuesController) 
