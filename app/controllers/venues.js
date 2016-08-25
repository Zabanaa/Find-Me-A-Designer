export default class VenuesController {
    
    constructor(VenuesService){
        this.venues = VenuesService.getVenues()
        this.searchLocation = VenuesService.searchLocation
        this.userSearchQuery = VenuesService.userSearchQuery
    }

    showDetail(venue){
        console.log(venue)
    }

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService']
