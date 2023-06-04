const express = require('express');
const app = express();
const port = 3100;

app.use(express.json());

// In-memory data storage for books
const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'The Notebook', author: 'Nicholas Sparks' },
    { id: 3, title: 'The Kite Runner', author: 'Khaled Hosseini' },
    { id: 4, title: 'The Da Vinci Code', author: 'Dan Brown' },
    { id: 5, title: 'Angels & Demons', author: 'Dan Brown' },
];

// Endpoint to get all books or search for books by title or author
app.get('/api/books', (req, res) => {
    const { title, author } = req.query;
    let filteredBooks = books;

    if (title) {
        filteredBooks = books.filter(book => {
            return book.title.toLowerCase().includes(title.toLowerCase());
        });
    }

    if (author) {
        filteredBooks = books.filter(book => {
            return book.author.toLowerCase().includes(author.toLowerCase());
        });
    }

    res.json(filteredBooks);
});

// Endpoint to add a new book
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }

    // Validation to check if book already exists
    const existingBook = books.find(book => {
        return book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase();
    });

    if (existingBook) {
        return res.status(400).json({ error: 'Book already exists' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.json(newBook);
});

// Endpoint to get book details by ID
app.get('/api/books/details', (req, res) => {
    const id = +req.query.id;

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }

    const book = books.find(book => {
        return book.id === id;
    });

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
});

// Endpoint to update book details by ID
app.put('/api/books/update', (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }

    const book = books.find(book => {
        return book.id == id;
    });

    const { title, author } = req.body;

    if (!title && !author) {
        return res.status(400).json({ error: 'Title or author is required' });
    }

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    if (title) {
        book.title = title;
    }

    if (author) {
        book.author = author;
    }

    res.json(book);
});

// Endpoint to delete a book by ID
app.delete('/api/books/delete', (req, res) => {
    const id = req.query.id * 1;

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }

    const book = books.find(book => {
        return book.id === id;
    });

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.status(204).json(book);
});

// Endpoint to search for books based on a keyword
app.get('/api/books/search', (req, res) => {
    const keyword = req.query.keyword;

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(keyword.toLowerCase()) || book.author.toLowerCase().includes(keyword.toLowerCase());
    });

    res.json(filteredBooks);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));