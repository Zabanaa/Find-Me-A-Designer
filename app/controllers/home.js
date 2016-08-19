export default class HomeController {
    
    // Pass any dependencies to the constructor
    constructor() {
        this.name = "Neymar Jr"
    }

    submitForm() {

        let response = {
            searchType: this.searchType,
            searchLocation: this.location
        }

        console.log(`You are looking for ${response.searchType} and you're based in ${response.searchLocation}`)
    }

}


