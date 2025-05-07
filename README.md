# Инструкции по установке и запуску проекта. Необходимые шаги и зависимости для приложения
npm create vite@latest my-app
Framework: React
Variant: JavaScript
Перехожу в проект дальше
npm install
npm run dev
 Зависимости
 npm install react-router-dom
 npm install axios
 npm install react react-dom
 npm install react-hook-form

 # Автор проекта Gasan Iuii IA2303

 # Описание проекта
 Функциональные требования:

 Интуитивно понятный пользовательский интерфейс

Приложение имеет простую и понятную навигацию с использованием компонентов и страниц. Навигация осуществляется через Link в компоненте Header, что позволяет легко переходить между страницами "Главная", "Добавить" и "Редактировать".

Отображение, создание, редактирование и удаление данных:

Отображение: Книги отображаются на главной странице с использованием компонента BookCard. Для каждой книги отображаются такие данные, как название, автор, жанр, рейтинг и обложка.

Создание: На странице CreatePage используется компонент BookForm, который позволяет пользователю ввести данные для создания новой книги.

Редактирование: На странице EditPage используется компонент BookForm, который позволяет редактировать книгу, предварительно загружая данные по ID.

Удаление: Кнопка "Удалить" на карточке книги вызывает функцию handleDelete, которая удаляет книгу через API и обновляет состояние на клиенте.

# Валидация вводимых данных и отображения ошибок

Компонент BookForm
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.title || !formData.author || !formData.genre || !formData.rating) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }
  if (book) {
    await updateBook(book.id, formData);
  } else {
    await createBook(formData);
  }
};

# Поиск, сортировка и фильтрация данных:

Поиск: Функция поиска по ключевым словам реализована через компонент SearchBar, который фильтрует книги по названию с использованием состояния query.

Фильтрация: Компонент FilterBar позволяет фильтровать книги по жанрам. Фильтрация выполняется через состояние genreFilter и отображается на главной странице.

Сортировка: В проекте есть сортировка данных

const handleSort = () => {
  const sortedBooks = [...filteredBooks].sort((a, b) => b.rating - a.rating);
  setBooks(sortedBooks);
};

Валидация на стороне клиента исполнена в файле BookForm.jsx

# Адаптивный дизайн анимации и интерактивные элементы

Адаптивность: В проекте используется CSS Grid для отображения карточек книг, что делает интерфейс адаптивным.

Анимации: Карточки книг имеют плавные анимации при наведении (эффект тени).

Интерактивные элементы: Все кнопки и ссылки имеют визуальные изменения при наведении.

Есть адаптация под экран.

# Нефункциональные требования 
Использование библиотеки React в качестве основы клиентской части:

Проект использует React для построения пользовательского интерфейса, компоненты разбиты на отдельные файлы.

Оптимизация производительности:

Приложение использует React, что уже обеспечивает хорошую производительность. Однако, в случае большого количества данных, можно добавить пагинацию или виртуализацию списка для улучшения производительности.

# Источники 

1. React
Официальная документация по React: https://reactjs.org/docs

React Hooks: https://reactjs.org/docs/hooks-intro.html

Работа с состоянием в React: https://reactjs.org/docs/state-and-lifecycle.html

2. JSX и компоненты React
JSX в React: https://reactjs.org/docs/jsx-in-depth.html

Описание компонентов и пропсов: https://reactjs.org/docs/components-and-props.html

3. Formik и валидация
Формы и валидация в React (Formik): https://formik.org/docs

Валидация в React с использованием библиотеки Yup: https://github.com/jquense/yup

4. Сортировка данных в JavaScript
Метод .sort() в JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Работа с массивами в JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

5. API и взаимодействие с сервером
Работа с API в React (fetch): https://reactjs.org/docs/faq-ajax.html

Примеры работы с fetch() в JavaScript: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

6. CSS для ошибок и валидаторов
Основы работы с CSS: https://developer.mozilla.org/en-US/docs/Web/CSS

Спецификации и методы работы с ошибками формы в CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Forms

7. JavaScript и работа с числами
Проверка чисел в JavaScript (например, для валидации рейтинга): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Проверка на числа с использованием isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

8. Работа с ошибками и исключениями в JavaScript
Обработка ошибок в JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

9. Стандарты кода и документация
Рекомендации по оформлению документации с использованием JSDoc: https://jsdoc.app/