export default class HomeController {
    
    // Pass any dependencies to the constructor
    constructor(VenuesService, $location) {
        this.name = "Neymar Jr"
        this.venues = VenuesService
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
       
        this.venues.setLocation(formData.location)

        this.venues.fetchVenues(formData)
            .then( 
                (response) => {
                    this.venues.setVenues(response.data)
                    this.$location.path('/venues')
                },
                (error) => console.log(error) 
            )

    }

}

HomeController.$inject = ['VenuesService', '$location']

