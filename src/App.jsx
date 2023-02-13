import { useState } from "react";
import Notes from "./components/Notes";
import "./App.css";
import AddNote from "./components/AddNote";

function App() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);
  function onSubmit(event) {
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = `${today.toLocaleDateString()} ${time}`;
    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), date: date, value: value },
    ]);
    event.preventDefault();
    setValue("");
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Note Taking App</h1>
      <AddNote value={value} setValue={setValue} onSubmit={onSubmit} />
      <Notes valueArr={notes} deleteFunc={deleteNote} />
    </div>
  );
  function deleteNote(id) {
    let filteredArr = notes.filter((x) => x.id !== id);
    setNotes(filteredArr);
  }
}

export default App;
