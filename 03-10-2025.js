// library management system
let books = [];
let nextId = 1;

function addBook(title, author, year) {
  if (!title || !author || !year) {
    console.log("All fields are required!");
    return;
  }

  if (books.some(b => b.title.toLowerCase() === title.toLowerCase())) {
    console.log("book with this title already exists!");
    return;
  }

  const book = { id: nextId++, title, author, year };
  books.push(book);
  console.log(`book added: ${title}`);
}

function listBooks() {
  if (books.length === 0) {
    console.log("No books available.");
    return;
  }

  console.log("All Books:");
  books.forEach(b => {
    console.log(`ID: ${b.id}, Title: ${b.title}, author: ${b.author}, year: ${b.year}`);
  });
}

function searchBook(keyword) {
  const results = books.filter(
    b =>
      b.title.toLowerCase().includes(keyword.toLowerCase()) ||
      b.author.toLowerCase().includes(keyword.toLowerCase())
  );

  if (results.length === 0) {
    console.log("No books found!");
  } else {
    console.log("search results:");
    results.forEach(b => {
      console.log(`ID: ${b.id}, title: ${b.title}, author: ${b.author}, year: ${b.year}`);
    });
  }
}

function deleteBook(id) {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    console.log("book not found!");
    return;
  }
  console.log(`book deleted: ${books[index].title}`);
  books.splice(index, 1);
}

function updateBook(id, newTitle, newAuthor, newYear) {
  const book = books.find(b => b.id === id);
  if (!book) {
    console.log("book not found!");
    return;
  }

  book.title = newTitle || book.title;
  book.author = newAuthor || book.author;
  book.year = newYear || book.year;

  console.log(`book updated: ${book.title}`);
}

function saveBooks() {
  const saved = JSON.stringify(books);
  console.log("books saved:", saved);
  return saved;
}

function loadBooks(jsonData) {
  books = JSON.parse(jsonData);
  console.log("books loaded successfully.");
}

addBook("Booksky", "Kishor", 2025);
addBook("Perfumy", "Kumar", 2024);
addBook("Reestar", "Author X", 2023);
console.log(books);
listBooks();

searchBook("Kishor");

deleteBook(2);

updateBook(1, "booksky updated", "Kishor Kumar", 2026);

listBooks();

const savedData = saveBooks();
loadBooks(savedData);
listBooks();