import { getBands, getVenues, getBookings} from "./database.js"

// Get copy of state for use in this module
const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


// Function whose responsibility is to find the band assigned to a venue
const findBandBooking = (booking, allBands) => {
    let bandBooked = null

    for (const band of allBands) {
        if (band.id === booking.venueId) {
            bandBooked = band
        }
    }

    return bandBooked
}

const findVenue = (booking, allVenues) => {
    let venueBooked = null

    for (const venue of allVenues) {
        if (venue.id === booking.bandId) {
            venueBooked = venue
        }
    }

    return venueBooked
}

export const Bookings = () => {
    let bookingsHTML = ""
    bookingsHTML = "<ul>"

    for (const currentBooking of bookings) {
        const bandBooked = findBandBooking(currentBooking, bands)
        const venueBooked = findVenue(currentBooking, venues)
        bookingsHTML += `
            <li id="booking--${bandBooked.id}">
                ${bandBooked.name} is playing at ${venueBooked.name} ${currentBooking.date} 
            </li>
        `
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}

document.addEventListener(
    "click",  
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("booking")) {

            const [,bandId] = itemClicked.id.split("--")

            let matchingBand = null
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    matchingBand = band
                }
            }

            window.alert(`
            Band: ${matchingBand.name} 
            Genre: ${matchingBand.genre} 
            Year Formed: ${matchingBand.formed} 
            Number of Members: ${matchingBand.members}`)
        }
    }
)


