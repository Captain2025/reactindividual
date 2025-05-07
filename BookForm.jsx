
import { useState, useEffect } from 'react';
import { createBook, updateBook } from '../services/api';

function BookForm({ book }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    cover: ''
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    if (book) {
      setFormData(book); // Если передан объект book, устанавливаем его данные в форму
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = 'Название книги обязательно';
    if (!formData.author) errors.author = 'Автор книги обязателен';
    if (!formData.genre) errors.genre = 'Жанр книги обязателен';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 10) {
      errors.rating = 'Рейтинг должен быть числом от 1 до 10';
    }
    if (!formData.cover) errors.cover = 'URL обложки обязателен';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Не отправляем форму, если есть ошибки
    }
    
    try {
      if (book) {
        await updateBook(book.id, formData);
      } else {
        await createBook(formData);
      }
    } catch (error) {
      alert('Ошибка при сохранении книги');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название книги"
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Автор"
      />
      {errors.author && <p className="error">{errors.author}</p>}

      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Жанр"
      />
      {errors.genre && <p className="error">{errors.genre}</p>}

      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Рейтинг"
      />
      {errors.rating && <p className="error">{errors.rating}</p>}

      <input
        type="text"
        name="cover"
        value={formData.cover}
        onChange={handleChange}
        placeholder="URL обложки"
      />
      {errors.cover && <p className="error">{errors.cover}</p>}

      <button type="submit">Сохранить</button>
    </form>
  );
}

export default BookForm;
