const COHORT = '2409-GHP-ET-WEB-PT'
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/' + COHORT;

const state = {
    events: [],
}

/** Updates state with event from API - KH*/
async function getEvents() {
    try {
        const promise = await fetch(`${BASE_URL}` + "/events")
        const response = await promise.json()
        if (!response.success) {
            throw response.console.error;
        }
        state.events = response.data;
    } catch (error) {
        alert("Unable to load Events");
    }
}

/** Asks the API to create a new events based on the given `event` */
async function createEvent(event) {
    try {
        const response = await fetch(`${BASE_URL}` + "/events", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
          })
          
        if (!response.ok) {
            throw new Error(
                "Unable to add event due to Http error: " + response.status
            );
        }
    } catch (error) {
        alert(error.message);
    }}

function renderEvents() {
  const partyList = document.querySelector("#partyList");

  if (!state.events.length) {
    partyList.innerHTML = "<li>No events</li>";
    return;
  }

  const eventCards = state.events.map((event) => {
    const card = document.createElement("li");
    //H1 for Artist Name
    const h1 = document.createElement("h1");
    h1.textContent = event.name;

    //H2 for Artist Description
    const h2 = document.createElement("h2");
    h2.textContent = event.description;

    //Image of Artist
    const image = document.createElement("img");
    image.src = event.imageUrl; //set the img src to be the imageUrl from the artist object
    image.style.width = "50%";
    image.style.height = "50%";


  });

  partyList.replaceChildren(...eventCards);
}

// /** Asks  the API to delete an event at the given url */ MM
async function deleteEvent() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", async () => {
        await deleteEvent(event);
    });

    card.append(h1, h2, image, deleteButton);
    return card;
};

//   eventList.replaceChildren(...eventCards);


// /** Syncs state with the API and rerender */MM
async function render() {
    await getEvents();
    renderEvents();
}


render();



// TODO: Add events with form data when the form is submitted DR

const form = document.getElementById("partyForm")
form.addEventListener('submit', async(event) => {
    event.preventDefault();
    try {
        const eventDate = new Date(form.eventDate.value);

        const newParty = {
            name: form.eventName.value,
            description: form.eventDescription.value,  //description instead of decription
            date: eventDate.toISOString(),
            location: form.eventLocation.value,
            name: "test"
      
          };
        console.log (newParty)
    await createEvent (newParty)
    } catch (error) {
        console.log(error)
    }
})
//TODO:  Look at the HTML.  What elements need event listeners attached?  What will we do 

//when the event happens?  (what function will we call?  (getEvents, deleteEvent, createEvent))