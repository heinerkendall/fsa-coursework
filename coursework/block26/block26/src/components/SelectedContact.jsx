import { useState, useEffect } from "react";

export default function SelectedContact({ SelectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState({
        "id": 1,
        "name": "Mrs. Jerald Schulist",
        "username": "Antwan",
        "email": "Coby_Zieme@libby.tv",
        "address": {
          "street": "Morissette Heights",
          "suite": "Apt. 633",
          "city": "Port Liashire",
          "zipcode": "04270",
          "geo": {
            "lat": "27.7501",
            "lng": "-83.1776"
          }
        },
        "phone": "(663)839-3814 x845",
        "website": "arvel.io",
        "company": {
          "name": "D'Amore-Krajcik",
          "catchPhrase": "Down-sized empowering Graphic Interface",
          "bs": "extend cross-media relationships"
        }
      });

    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`);
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact();
      }, []);
      console.log(contact)
    return (
        <>
      <button onClick={() => {setSelectedContactId(null)}}>Return</button>
  <h2>{contact.name}</h2>
  <h3>{contact.company.catchPhrase}</h3>
  </>
//I know realistically I should add name, email and phone but these catchphrases are too funny
    );
  }