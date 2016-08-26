export default class VenuesController {
    
    constructor(VenuesService, MapsService){
        this.venues = VenuesService.getVenues()
        this.mapsService = MapsService
        this.searchLocation = VenuesService.searchLocation
        this.userSearchQuery = VenuesService.userSearchQuery
        this.modalShown = false
        this.mapElement = document.querySelector(".venue-map")
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
        this.mapsService.createMap(this.mapElement, this.venue.latLng)

    }

    closeModal() {
        this.modalShown = false
        this.venue = null
    }

}

// DO THE NECESSARY INJECTIONS
VenuesController.$inject = ['VenuesService', 'MapsService']
