import { useEffect, useState } from "react";

function BooksAPI() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.length < 2) {
      setBooks([]);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      fetch(`https://openlibrary.org/search.json?q=${search}`)
        .then(res => res.json())
        .then(data => {
          setBooks(data.docs.slice(0, 12));
          setLoading(false);
        })
        .catch(() => {
          setBooks([]);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="books-page">
      <h2 className="page-title">Books API Search</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Search book by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="loading">Searching...</p>}

      {!loading && books.length === 0 && search.length >= 2 && (
        <p className="empty">No results found</p>
      )}

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-image">
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>

            <div className="book-content">
              <h4>{book.title}</h4>
              <p>{book.author_name?.[0] || "Unknown Author"}</p>
              <span>
                {book.first_publish_year || "N/A"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksAPI;
