const routing = ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise("/")
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })

        .state('results', {
            url: '/venues',
            templateUrl: '/app/templates/venues.html',
            controller: 'VenuesController',
            controllerAs: 'venues'
        })
}

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

export default routing
