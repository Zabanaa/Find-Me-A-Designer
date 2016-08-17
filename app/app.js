import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routing'


angular.module('app', [uirouter])
    .config(routing)

console.log("Hello Bro")  

