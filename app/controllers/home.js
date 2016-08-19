export default class HomeController {
    
    // Pass any dependencies to the constructor
    constructor() {
        this.name = "Neymar Jr"
    }

    submitForm() {
        
        let formData = {
            
            searchQuery : this.searchQuery,
            radius : this.radius,
            limit : this.limit
        }
        
        console.log(`You fancy ${formData.searchQuery} and want us to return ${formData.limit} venues in a ${formData.radius} metres radius`)

    }

}


