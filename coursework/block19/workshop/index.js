const names = ["kendall", "daniel", "grace"];
const occupation = ["data engineer", "software engineer", "tutor"];
const price = ["100", "51", '22'];

const freelancers = [
  { name: "kendall", price: 100, occupation: "data engineer" },
  { name: "daniel", price: 51, occupation: "software engineer" },
  { name: "grace", price: 22, occupation: "tutor" },
];

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = Math.floor(Math.random() * 100);
  const occupation = occupation[Math.floor(Math.random() * occupation.length)];

  freelancers.push({ name, price, occupation });
}
function render() {


const tableBody = document.querySelector("table");
console.log(tableBody)
const averagePrice = document.querySelector("average-price");
console.log(averagePrice)


const rowElements = freelancers.map((freelancer) => {;
const newRow = document.createElement("tr");
const { name, price, occupation } = freelancer;

const nameDetail = document.createElement("td");
nameDetail.innerText = name;


const occupationDetail = document.createElement('td')
occupationDetail.innerText = occupation;

const priceDetail = document.createElement("td")
priceDetail.innerText = `$${price}`;

newRow.append(nameDetail);
newRow.append(occupationDetail);
newRow.append(priceDetail);
tableBody.appendChild(newRow)

return newRow;
});

tableBody.replaceChildren(...Element)



const newAverage = calculateAveragePrice();
averagePrice.innerText = `$${newAverage}`;
}
function calculateAveragePrice(){
    const total=freelancers.reduce(
        (subtotal,current) => subtotal + current.price,
        0  );

return total/freelancers.length;
    }

const addFreelancerIntervalID = setInterval(() => {
  addFreelancer();
  render();

  if (freelancers.length >= maxLength) {
    clearInterval(addFreelancerIntervalID);
  }
}, 100);
render();
