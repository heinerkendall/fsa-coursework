const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
    artists: [],
};

/** Updates state with artists from API */
async function getArtists() {
    const promise = await fetch('${API_URL}' + "/artists")
    const response = await promise.json()
    console.log(response.data)
    state.artists = response.data
}

/** Asks the API to create a new artist based on the given `artist` */
async function addArtist(artist) {
    // TODO
  }


// === Render ===

/** Renders artists from state */
function renderArtists() {
    const ul = document.getElementById("artists")
    state.artists.forEach((artist) => {
        const li = document.createElement("li");
        li.textContent = artist.name
        ul.appendChild(li)
    })
}

/** Syncs state with the API and rerender */



// === Script ===

render();

// TODO: Add artist with form data when the form is submitted