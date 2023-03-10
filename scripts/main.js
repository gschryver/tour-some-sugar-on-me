// import { BandyBands } from "./BandyBands.js"
import { VenueList } from "./VenueList.js"
import { Bands } from "./Bands.js"
import { Bookings } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>
<article class="details">
    <section class="detail--column list details__cities">
    <h2>Venues</h2>
    ${VenueList()}
    </section>
    <section class="detail--column list details__cities">
    <h2>Bands</h2>
    ${Bands()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

// ${VenueList()}
// ${Bookings()}
// ${BandyBands()}