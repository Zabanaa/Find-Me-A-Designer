export default class VenuesController {
    
    constructor(VenuesService){
        this.venues = VenuesService.getVenues()
        this.searchLocation = VenuesService.searchLocation
        this.userSearchQuery = VenuesService.userSearchQuery
        this.modalShown = false
        this.venue = null
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
    }

    closeModal() {
        this.modalShown = false
        this.venue = null
    }

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService']
