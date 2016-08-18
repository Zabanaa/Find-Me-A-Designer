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
            
            url: '/results/teams',
            templateUrl: 'app/templates/results.html',
            controller: 'ResultsController',
            controllerAs: 'results'

        })
        
        .state('designers', {
            
            url: '/results/designers',
            templateUrl: 'app/templates/results.html',
            controlelr: 'ResultsController',
            controllerAs: 'results'
        
        })

        .state('team detail', {
            
            url: '/teams/:id/',
            templateUrl: 'app/template/details.html',
            controller: 'DetailsController',
            controllerAs: 'details'

        })
    
        .state('designers detail', {
            
            url: '/designers/:id/',
            templateUrl: 'app/template/details.html',
            controller: 'DetailsController',
            controllerAs: 'details'

        })

}

routing.$inject = ['$stateProvider', '$urlRouterProvider']

export default routing
