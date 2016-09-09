export default class HomeController {
    
    constructor(VenuesService, $location) {
        this.$location = $location
        this.venues = VenuesService
    }
    
    submitForm() {
        
        let formData = {
            query : this.searchQuery,
            radius : this.radius,
            limit : this.limit,
            location: this.location,
        }
       
        this.venues.setLocation(formData.location)
        this.venues.setUserSearchQuery(formData.query)

        this.venues.fetchVenues(formData)
            .then( 
                (response) => {
                    this.venues.setVenues(response.data)
                    this.venues.callMade = true
                    this.$location.path('/venues')
                },
                (error) => console.log(error) 
            )

    }

}

HomeController.$inject = ['VenuesService', '$location']

