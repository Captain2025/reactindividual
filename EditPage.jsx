
// ===== src/pages/EditPage.jsx =====
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import { getBookById } from '../services/api';

function EditPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(setBook).catch(error => {
      alert(error.message); // Обработка ошибки загрузки
    });
  }, [id]);

  if (!book) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h2>Редактировать книгу</h2>
      <BookForm book={book} />
    </div>
  );
}

export default EditPage;
