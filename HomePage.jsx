
import { useEffect, useState } from 'react';
import { getBooks } from '../services/api';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [sorted, setSorted] = useState(false);  // Для отслеживания состояния сортировки

  useEffect(() => {
    getBooks().then(setBooks).catch(error => {
      alert(error.message); // Показ ошибки при загрузке
    });
  }, []);

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleSort = () => {
    const sortedBooks = [...books].sort((a, b) => b.rating - a.rating); // Сортировка по убыванию рейтинга
    setBooks(sortedBooks);
    setSorted(true);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(query.toLowerCase()) &&
      (genreFilter ? book.genre === genreFilter : true)
    );
  });

  return (
    <div className="container">
      <SearchBar query={query} setQuery={setQuery} />
      <FilterBar genre={genreFilter} setGenre={setGenreFilter} />
      
      {/* Кнопка для сортировки */}
      <button onClick={handleSort} className="sort-btn">
        Сортировать по рейтингу
      </button>

      <div className="grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
