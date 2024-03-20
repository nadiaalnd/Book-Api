const book = require('../model/book');

exports.getAll = async (req, res) => {
    try {
        const result = await book.getAll();
        return res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const result = await book.getById(req.params.id);
        if (result) {
            return res.status(200).json({
                status: 'success',
                data: result
            });
        }
        return res.status(404).json({
            status: 'failed',
            message: 'Data not found'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}

exports.create = async (req, res) => {
    try {
        const {
            judul,
            pengarang,
            tahun_terbit,
            id_kategori
        } = req.body;
        if(!judul || !pengarang || !tahun_terbit || !id_kategori) {
            return res.status(400).json({message: 'All field must be filled'});
        }
        const check = await book.checkCategoryExist(id_kategori);
        if(!check) {
            return res.status(400).json({message: 'Category not found'});
        }
        const createData = await book.create({
            judul,
            pengarang,
            tahun_terbit,
            id_kategori
        });

        if (createData) {
            return res.status(201).json({
                status: 'success',
                message: 'Data created'
            });
        }
        return res.status(400).json({
            status: 'failed',
            message: 'Data not created'
        });
    }catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}

exports.update = async (req, res) => {
    try {
        const {
            judul,
            pengarang,
            tahun_terbit,
            id_kategori
        } = req.body;
        if(!judul || !pengarang || !tahun_terbit || !id_kategori) {
            return res.status(400).json({message: 'All field must be filled'});
        }
        const check = await book.checkCategoryExist(id_kategori);
        if(!check) {
            return res.status(400).json({message: 'Category not found'});
        }
        const updateData = await book.update(req.params.id, {
            judul,
            pengarang,
            tahun_terbit,
            id_kategori
        });
        if (updateData) {
            return res.status(200).json({
                status: 'success',
                message: 'Data updated'
            });
        }
        return res.status(400).json({
            status: 'failed',
            message: 'Data not updated'
        });
    }catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const deleteData = await book.deleteBook(req.params.id);
        if (deleteData) {
            return res.status(200).json({
                status: 'success',
                message: 'Data deleted'
            });
        }
        return res.status(400).json({
            status: 'failed',
            message: 'Data not deleted'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}

