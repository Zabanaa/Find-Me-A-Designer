import credentials from './credentials'

let clientId = credentials.clientId
let clientSecret = credentials.clientSecret

export default class VenuesService {
    
    constructor($http){
        this.get = $http.get
        this.endpoint = 'https://api.foursquare.com/v2/venues/explore?'
        this.clientId = clientId 
        this.clientSecret = clientSecret 
        this.version = "20160820"
        this.venues = {}
        this.searchLocation = null
        this.userSearchQuery = null
        this.callMade = false
    }
    
    fetchVenues(params){
        return this.get(this.endpoint + 'near=' + params.location + '&query='+ params.query + '&price=' + params.price +'&limit=' + params.limit+ '&radius='+ params.radius +'&client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&v=' + this.version) 
    }
    
    getVenues(){
        return this.venues 
    }

    setUserSearchQuery(userQuery) {
        this.userSearchQuery = userQuery    
    }

    setVenues(data){
        this.venues = data.response.groups['0'].items
    }

    setLocation(newLocation) {
        this.searchLocation = newLocation 
    }

}

VenuesService.$inject = ['$http']
