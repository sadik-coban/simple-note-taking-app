function Note({ id, date, value, deleteFunc }) {
  return (
    <div className="note">
      <p>{value}</p>
      <p>{date}</p>
      <button onClick={() => deleteFunc(id)}>Delete</button>
    </div>
  );
}

export default Note;
