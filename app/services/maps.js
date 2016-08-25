export default class MapsService {

    constructor() {
    }
    
    createMap(element, location){
    
        // create the map
        let mapEl = element
        let myLatLng = {lat: location.lat, lng: location.lng}
        let mapOptions = {
            zoom: 12,
            center: myLatLng
            // Add other options here
        }

        let map = new google.maps.Map(mapEl, mapOptions)
            
        let pin = new google.maps.Marker({
            
            position: myLatLng,
            map: map,
            title: "HEY BRUV"
        
        })
    }

}

