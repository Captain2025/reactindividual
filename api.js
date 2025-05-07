
// ===== src/services/api.js =====
import axios from 'axios';

const API_URL = 'https://680b333ad5075a76d98a2d29.mockapi.io/api/v2/books';  // Обновляем на правильный API endpoint

export const getBooks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Ошибка при загрузке книг:', error);
    throw new Error('Не удалось загрузить книги');
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Ошибка при загрузке книги с ID ${id}:`, error);
    throw new Error(`Не удалось загрузить книгу с ID ${id}`);
  }
};

export const createBook = async (data) => {
  try {
    await axios.post(API_URL, data);
  } catch (error) {
    console.error('Ошибка при добавлении книги:', error);
    throw new Error('Не удалось добавить книгу');
  }
};

export const updateBook = async (id, data) => {
  try {
    await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.error(`Ошибка при обновлении книги с ID ${id}:`, error);
    throw new Error(`Не удалось обновить книгу с ID ${id}`);
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Ошибка при удалении книги с ID ${id}:`, error);
    throw new Error(`Не удалось удалить книгу с ID ${id}`);
  }
};
