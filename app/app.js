import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routing'
import HomeController from './controllers/home'

angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
