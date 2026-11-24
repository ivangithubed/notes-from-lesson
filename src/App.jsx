import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
// import Test from "./components/Test";

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  const deleteNote = (id) => {
    const confirmDelate = window.confirm("Ви впевнені, щло хочете видалити?");
    if (!confirmDelate) return;

    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* <Test /> */}
      <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow-lg mb-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center ">
          📝 Застосунок Нотатки
        </h1>
        <NoteForm setNotes={setNotes} />

        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </>
  );
}

export default App;
