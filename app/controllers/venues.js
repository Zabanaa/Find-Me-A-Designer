export default class VenuesController {
    
    constructor(VenuesService){
        this.venues = VenuesService.getVenues()
        this.searchLocation = VenuesService.searchLocation
        this.userSearchQuery = VenuesService.userSearchQuery
        this.modalShown = false
    }

    showDetail(venue){
        console.log(venue)
    }

    openModal(venue) {
        this.modalShown = true 
        let modalVenue = venue.venue
        this.venue = {
            name: modalVenue.name,
            phone: modalVenue.contact.formattedPhone,
            twitter: modalVenue.contact.twitter,
            url: modalVenue.url, 
            address: modalVenue.location.formattedAddress.join(),
            rating: modalVenue.rating,
            ratingColor: modalVenue.ratingColor,
            isOpen: modalVenue.hours.isOpen,
            hereNow: modalVenue.hereNow.count,
            checkins: modalVenue.stats.checkinsCount,
            tips: modalVenue.stats.tipCount,
            latLng: {lat: modalVenue.location.lat, lng: modalVenue.location.lng}
        } 

        // Make call to the google maps api

    }

    closeModal() {
        this.modalShown = false
        this.venue = null
    }

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService']
