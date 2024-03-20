const db = require('../config/connection');

exports.getAll = async () => {
    try {
        return await db('kategori').select('*');
    } catch (error){
        throw error;
    }
}

exports.getById = async (id) => {
    try {
       return await db('kategori').where({id_kategori:id}).select('*').first();
    } catch (error){
        throw error;
    }
}

exports.create = async (category) => {
    try {
        return await db('kategori').insert(category);
    } catch (error){
        throw error;
    }
}

exports.update = async (id, category) => {
    try {
        const check = await db('kategori').where('id_kategori', id).select('id_kategori').first();
        if (!check) {
            return false;
        }
        return await db('kategori').where('id_kategori', id).update(category);
    } catch (error){
        throw error;
    }
}

exports.deleteCategory = async (id) => {
    try {
        const check = await db('kategori').where('id_kategori', id).select('id_kategori').first();
        const ifBookExist = await db('buku').where('id_kategori', id).select('id_kategori').first();
        if (check && !ifBookExist) {
            return await db('kategori').where('id_kategori', id).del();
        }
        return false;
    } catch (error){
        throw error;
    }
}
