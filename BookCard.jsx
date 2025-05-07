
// ===== src/components/BookCard.jsx =====
import { Link } from 'react-router-dom';
import { deleteBook } from '../services/api';

function BookCard({ book, onDelete }) {
  const handleDelete = async () => {
    try {
      await deleteBook(book.id);
      onDelete(book.id);  // Уведомляем родительский компонент об удалении
    } catch (error) {
      alert('Ошибка при удалении книги');
    }
  };

  return (
    <div className="card">
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Автор: {book.author}</p>
      <p>Жанр: {book.genre}</p>
      <p>Рейтинг: {book.rating}</p>
      <Link to={`/edit/${book.id}`} className="edit-link">Редактировать</Link>
      <button onClick={handleDelete} className="delete-btn">Удалить</button>
    </div>
  );
}

export default BookCard;
