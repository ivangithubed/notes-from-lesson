const NoteList = ({ notes, deleteNote }) => {
  if (!notes || notes.length === 0) {
    return <div className="text-center text-gray-500 mt-4">Немає нотаток</div>;
  }
console.log(notes[0].priority);

  return (
    <div className="space-y-4 mt-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white p-4 rounded-lg shadow border-l-4"
          style={{
            borderLeftColor:
              note.priority === "High"
                ? "red"
                : note.priority === "Medium"
                  ? "orange"
                  : "green",
          }}
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-700">{note.description}</p>
          <p className="text-gray-500 text-sm">
            Пріоритет: {note.priority} | Категорія: {note.category}
          </p>
          <button
            type="button"
            className="text-red-600 hover:text-red-700 cursor-pointer"
            title="Видалити нотатку"
            onClick={() => deleteNote(note.id)}
          >
            🗑️ Видалити
          </button>
        </div>
      ))}
    </div>
  );
};
export default NoteList;
