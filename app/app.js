import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routing'
import HomeController from './controllers/home'
import DesignerController from './controllers/designers'
import TeamController from './controllers/teams'


angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('DesignerController', DesignerController)
    .controller('TeamController', TeamController)
    
