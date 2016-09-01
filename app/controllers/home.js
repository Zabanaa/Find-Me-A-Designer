export default class HomeController {
    
    constructor(VenuesService, $location) {
        this.$location = $location
    }
    
    submitForm() {
        
        let formData = {
            query : this.searchQuery,
            radius : this.radius,
            limit : this.limit,
            location: this.location,
            price: this.price
        }
       
        VenuesService.setLocation(formData.location)
        VenuesService.setUserSearchQuery(formData.query)

        VenuesService.fetchVenues(formData)
            .then( 
                (response) => {
                    VenuesService.setVenues(response.data)
                    this.$location.path('/venues')
                },
                (error) => console.log(error) 
            )

    }

}

HomeController.$inject = ['VenuesService', '$location']

