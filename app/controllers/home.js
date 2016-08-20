export default class HomeController {
    
    // Pass any dependencies to the constructor
    constructor(VenuesService) {
        this.name = "Neymar Jr"
        this.venues = VenuesService
    }
    
    submitForm() {
        
        let formData = {
            
            query : this.searchQuery,
            radius : this.radius,
            limit : this.limit,
            location: this.location,
            price: this.price
        }
        
        this.venues.getVenues(formData)
            .then( (response) => console.log(response.data), (error) => console.log(error) )

    }

}

HomeController.$inject = ['VenuesService']

