/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    bookings: [
        { id: 1, bandId: 2, venueId: 3, date: "04/01/2023" },
        { id: 3, bandId: 2, venueId: 1, date: "05/02/2023" },
        { id: 2, bandId: 3, venueId: 2, date: "06/03/2023" },
        { id: 1, bandId: 3, venueId: 1, date: "07/04/2023" },
        { id: 3, bandId: 1, venueId: 2, date: "08/05/2023" },
        { id: 1, bandId: 1, venueId: 3, date: "09/06/2023" }
       
    ],
    venues: [ 
        { id: 1, name: "The Casbah", address: "2501 Kettner Blvd, San Diego, CA 92102", sqft: 5000, occupancy: 200 },
        { id: 2, name: "The Troubadour", address: "9081 N Santa Monica Blvd, West Hollywood, CA 90069", sqft: 10000, occupancy: 500 },
        { id: 3, name: "The Midway", address: "900 Marin St, San Francisco, CA 94124", sqft: 40000, occupancy: 2500 }
    ],
    bands: [{ 
        id: 1,
        name: "Stink Fist",
        genre: "black metal",
        formed: 2005,
        members: 5,
    }, {
        id: 2,
        name: "Prodigious Sun",
        genre: "post rock",
        formed: 2010,
        members: 6,
    }, {
        id: 3,
        name: "Flutes",
        genre: "indie-alternative rock",
        formed: 2015,
        members: 4,
    }
    ]
}

export const getBookings= () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}




