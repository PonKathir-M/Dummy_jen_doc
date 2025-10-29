import React, { useState } from "react";

export default function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) return;
    setBooks([...books, { title, author }]);
    setTitle("");
    setAuthor("");
  };

  const deleteBook = (i) => {
    setBooks(books.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Library Book Manager</h3>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add</button>

      <h4>Book List:</h4>
      <ul>
        {books.map((b, i) => (
          <li key={i}>
            "{b.title}" by {b.author}{" "}
            <button onClick={() => deleteBook(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
