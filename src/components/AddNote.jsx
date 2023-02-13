function AddNote({ value, setValue, onSubmit }) {
  return (
    <div className="add-note-container">
      <form onSubmit={onSubmit}>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Write your post:
          <textarea
            name="postContent"
            className="note-input"
            rows={10}
            cols={50}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddNote;
