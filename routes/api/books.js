const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../models/Book');


router.get('/api/books', async (req, res) => {

    try {
        const response = await Book.find();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send("cannot get data");
    }
});


router.get('/api/books/:id', async (req, res) => {
  
    try {
        const response = await Book.findById(req.params.id);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(404).send("404 not found");
    }
});


router.post('/api/books', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        isbn: req.body.isbn,
        author: req.body.author,
        description: req.body.description,
        published_date: req.body.published_date,
        publisher: req.body.publisher,
        updated_date: req.body.updated_date
    });
    newBook.save();
    res.status(200).send();

});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/api/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/api/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;