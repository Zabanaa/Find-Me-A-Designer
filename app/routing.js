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

        .state('results', {
            url: '/venues',
            templateUrl: '/app/templates/venues.html',
            controller: 'VenuesController',
            controllerAs: 'venues'
        })
}

routing.$inject = ['$stateProvider', '$urlRouterProvider']

export default routing
