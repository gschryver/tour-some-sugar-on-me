import { getBands, getBookings, getVenues} from "./database.js"

const allBookings = getBookings()
const bands = getBands()
const allVenues = getVenues()

export const Bands = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandHTML += "</ul>"
    
    return bandHTML

}

// The function needs the band information, so define a parameter
const filterBandsByBand = (bandId) => {
    let arrBookings = [];

    // Iterate the array value of bookings
    for (let bookingObjects of allBookings) {
        // Check if the primary key of the band equals the foreign key of the booking
        if (bookingObjects.bandId === parseInt(bandId)) {
        // If it does, add the current object to the array of bookings
            arrBookings.push(bookingObjects)
        }
    }
    // After the loop is done, return the bookings array
    return arrBookings  
}

// Define a function that builds a string of venue names. Needs a parameter for the bookings array.
const assignedVenues = (matchingVenues) => {
    // Define an empty string that will get appended with matching venues
    let emptyVenueString = ""

    // Iterate the array of booking objects
    for (let matchedObject of matchingVenues) {
        // For each assignment, iterate the venues array to find the match
        for(const theVenue of allVenues) {
            if (theVenue.id === matchedObject.venueId) {
                // Add the name of the matching venue to the array of venue names
                emptyVenueString += `${theVenue.name} `
            }
        }

    }

    // After the loop is done, return the string
    return emptyVenueString

}

document.addEventListener(
    "click",  
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("band")) {

            const [,bandId] = itemClicked.id.split("--")

  
            for (const bandObject of bands) {

                if (bandObject.id === parseInt(bandId)) {
                    
                    
                    const bookings = filterBandsByBand(bandId)
                    const venues = assignedVenues(bookings)
                    
                    
                    window.alert(`
                    ${bandObject.name} is playing at the:
                    ${venues}`)
                }
            }
        }
    }
)










