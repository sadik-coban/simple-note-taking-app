import React from "react";
import Note from "./Note";
const Notes = ({ valueArr, deleteFunc }) => {
  return (
    <div>
      {valueArr.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            date={note.date}
            value={note.value}
            deleteFunc={deleteFunc}
          />
        );
      })}
    </div>
  );
};

export default Notes;
