import Note from "./Note";
import AddNote from "./AddNote";
import React from "react";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <React.Fragment>
      <AddNote handleAddNote={handleAddNote} />
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default NotesList;
