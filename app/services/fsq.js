export default class VenuesService {
    
    constructor($http){
        this.get = $http.get
        this.endpoint = 'https://api.foursquare.com/v2/venues/explore?'
        this.clientId = 'Y5IGDTNYOSPCOOXGSHBC0XGALFKBNO0MSZFA1QSXP3LKILG5'
        this.clientSecret = '3RCSCB0GEVZX3CERI2DC4I1LU5G41ZPXFB2BUFPHWHVWBJRB'
        this.version = "20160820"
        this.venues = {}
        this.searchLocation = null
    }
    
    fetchVenues(params){
        return this.get(this.endpoint + 'near=' + params.location + '&query='+ params.query + '&price=' + params.price +'&limit=' + params.limit+ '&radius='+ params.radius +'&client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&v=' + this.version) 
    }
    
    getVenues(){
        return this.venues 
    }

    setVenues(data){
        this.venues = data.response.groups['0'].items
    }

    setLocation(newLocation) {
        this.searchLocation = newLocation 
    }

}

VenuesService.$inject = ['$http']
