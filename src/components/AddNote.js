import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [error, setError] = useState();
  const characterLimit = 500;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid note (non-empty values).",
      });
      return;
    }

    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          titleModal={error.title}
          messageModal={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Add
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddNote;
