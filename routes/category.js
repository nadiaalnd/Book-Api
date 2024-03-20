const express = require('express');
const router = express.Router();

const {
    getAll,
    getById,
    create,
    update,
    deleteCategory
}  = require('../controller/categoryController')

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deleteCategory);

exports.router = router;