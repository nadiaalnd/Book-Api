const express = require('express');
const router = express.Router();

const {
    getAll,
    getById,
    create,
    update,
    deleteBook
} = require('../controller/bookController')

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deleteBook);

exports.router = router;