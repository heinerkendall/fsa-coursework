import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact.jsx";

export default function App() {
  const [SelectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {SelectedContactId ? (
        <SelectedContact setSelectedContactId={setSelectedContactId} SelectedContactId={SelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
    </>
  );
}