const routing = ($stateProvider, $urlRouterProvider) => {

    // TODO set html5 mode on

    // ADD YOUR ROUTES HERE BRUV
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        
        .state('teams', {
            
            url: '/teams',
            templateUrl: '/app/templates/teams.html',
            controller: 'TeamController',
            controllerAs: 'team'
        
        })

        .state('designers', {
            

            url: '/designers', 
            templateUrl: '/app/templates/designers.html',
            controller: 'DesignerController', 
            controllerAs: 'designer'
        
        })

        .state('team_detail', {
            
            url: '/teams/:id',
            templateUrl: '/app/templates/team.html',
            controller: 'TeamController',
            controllerAs: 'team'
        
        })
        
        .state('designer_detail', {
            
            url: '/designers/:id',
            templateUrl: '/app/templates/designer.html',
            controller: 'DesignerController',
            controllerAs: 'designer'
        })

}

routing.$inject = ['$stateProvider', '$urlRouterProvider']

export default routing
