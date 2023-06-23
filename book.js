const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');
let booksData = []; // Array to store the book data

// Fetch books data from an API (replace with your actual API endpoint)
function fetchBooks() {
  // Simulating API response with sample data
  const sampleData = [
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', year: 2020, copies: 5 },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', year: 2018, copies: 3 },
    { title: 'Book 3', author: 'Author 3', genre: 'Genre 1', year: 2019, copies: 2 },
    { title: 'Book 4', author: 'Author 2', genre: 'Genre 3', year: 2021, copies: 1 },
    { title: 'Book 5', author: 'Author 4', genre: 'Genre 2', year: 2022, copies: 0 },
  ];

  // Simulating API fetch delay
  setTimeout(() => {
    booksData = sampleData;
    displayBooks(booksData);
  }, 500);
}

// Display books in the UI
function displayBooks(books) {
  bookList.innerHTML = '';
  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year: ${book.year}</p>
      <p>Available Copies: ${book.copies}</p>
    `;
    bookList.appendChild(bookDiv);
  });
}

// Search books based on the entered query
function searchBooks(searchTerm) {
  const filteredBooks = booksData.filter(book => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  displayBooks(filteredBooks);
}

searchInput.addEventListener('input', e => {
  const searchTerm = e.target.value.trim();
  if (searchTerm !== '') {
    searchBooks(searchTerm);
  } else {
    displayBooks(booksData);
  }
});

// Initial fetch
fetchBooks();
