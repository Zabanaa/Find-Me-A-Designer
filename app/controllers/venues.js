export default class VenuesController {
    
    constructor(VenuesService){
        this.venues = VenuesService
        this.data = VenuesService.getVenues()
        console.log(this.data)
    }

     

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService']
