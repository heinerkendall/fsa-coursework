const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/" + COHORT;

const state = {
  events: [],
};

const form = document.getElementById("partyForm");
const eventList = document.getElementById("partyList");

async function getParties() {
  try {
    const response = await fetch(`${API_URL}/events`);
    const json = await response.json();
    state.events = json.data;
  } catch (err) {
    console.log(err);
  }
}

async function createParty(partyInfo) {
  try {
    const response = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partyInfo),
    });
    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }
    render();
  } catch (err) {
    console.log(err);
  }
}

async function deleteParty(id) {
  try {
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Party could not be deleted.");
    }
    render();
  } catch (err) {
    prompt("error");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault;
  try {
    const eventDate = new Date(form.eventDate.value).toISOString();

    const newParty = {
      name: form.eventname.value,
      description: form.eventDescription.value,
      date: eventDate,
      location: form.eventLocation.value,
    };
    await createParty(newParty);

    form.reset();
  } catch (err) {
    console.log(err);
  }
});

async function render() {
  await getParties();
  renderEvents();
}

function renderEvents() {
  const eventDetails = state.events.map((event) => {
    const eventDate = new Date(event.date).toLocaleString();
    const eventCard = document.createElement("section");
    eventCard.innerHTML = `
      <div>
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <p>${event.date}</p>
        <p>${event.location}</p>
      </div>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Event";
    eventCard.append(deleteButton);
    deleteButton.addEventListener("click", () => deleteParty(event.id));
    return eventCard;
  });

  eventList.replaceChildren(...eventDetails);
}

render();