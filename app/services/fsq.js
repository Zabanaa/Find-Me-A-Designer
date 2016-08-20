export default class VenuesService {
    
    constructor($http){
        this.get = $http.get
        this.endpoint = 'https://api.foursquare.com/v2/venues/explore?'
        this.clientId = 'Y5IGDTNYOSPCOOXGSHBC0XGALFKBNO0MSZFA1QSXP3LKILG5'
        this.clientSecret = '3RCSCB0GEVZX3CERI2DC4I1LU5G41ZPXFB2BUFPHWHVWBJRB'
        this.version = "20160820"
    }
    
    getVenues(params){
        return this.get(this.endpoint + 'near=' + params.location + '&query='+ params.query + '&price=' + params.price +'&limit=' + params.limit+ '&radius='+ params.radius +'&client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&v=' + this.version) 
    }

}

VenuesService.$inject = ['$http']
