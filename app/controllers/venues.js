export default class VenuesController {
    
    constructor(VenuesService){
        this.venues = VenuesService.getVenues()
        this.searchLocation = VenuesService.searchLocation
    }

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService']
