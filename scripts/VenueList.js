import { getVenues} from "./database.js"
import { getBands } from "./database.js"
import { getBookings} from "./database.js"

const venues = getVenues()
const allBookings = getBookings()


export const VenueList = () => {
    let venuesHTML = "<ul>"

    for (const venue of venues) {
        venuesHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}


// The function needs the venue information, so define a parameter
const filterVenueByVenue = (venueId) => {
    let arrBookings = [];

    // Iterate the array value of bookings
    for (let bookingObjects of allBookings) {
        // Check if the primary key of the venue equals the foreign key of the booking
        if (bookingObjects.venueId === parseInt(venueId)) {
        // If it does, add the current object to the array of bookings
            arrBookings.push(bookingObjects)
        }
    }
    // After the loop is done, return the bookings array
    return arrBookings  
}


const allBands= getBands();

// Define a function that builds a string of band names. Needs a parameter for the bookings array.
const assignedBands = (matchingBands) => {
    // Define an empty string that will get appended with matching bands
    let emptyBandString = ""

    // Iterate the array of booking objects
    for (let matchedObject of matchingBands) {
        // For each assignment, iterate the bands array to find the match
        for(const theBand of allBands) {
            if (theBand.id === matchedObject.bandId) {
                // Add the name of the matching bands to the array of band names
                emptyBandString += `${theBand.name} `
            }
        }

    }

    // After the loop is done, return the string
return emptyBandString

}


document.addEventListener(
    "click",  
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("venue")) {

            const [,venueId] = itemClicked.id.split("--")

  
            for (const venueObject of venues) {

                if (venueObject.id === parseInt(venueId)) {
                    
                    
                    const bookings = filterVenueByVenue(venueId)
                    const bands = assignedBands(bookings)
                    
                    
                    window.alert(`${bands}are playing at the: ${venueObject.name}`)
                }
            }
        }
    }
)



