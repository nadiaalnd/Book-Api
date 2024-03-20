const {
    getById,
    getAll,
    create,
    update,
    deleteCategory
} = require('../model/category');

exports.getAll = async (req, res) => {
    try {
        const result = await getAll();
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
        const result = await getById(req.params.id);
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
            nama_kategori
        } = req.body;
        if(!nama_kategori) {
            return res.status(400).json({message: 'All field must be filled'});
        }
        const createData = await create({
            nama_kategori
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
            nama_kategori
        } = req.body;
        if(!nama_kategori) {
            return res.status(400).json({message: 'All field must be filled'});
        }
        const updateData = await update(req.params.id, {
            nama_kategori
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

exports.deleteCategory = async (req, res) => {
    try {
        const deteleData = await deleteCategory(req.params.id);
        if (deteleData) {
            return res.status(200).json({
                status: 'success',
                message: 'Data deleted'
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
};