const db = require('../config/connection');

exports.getAll = async () => {
    try{
        return await db('buku')
            .select('*')
            .join('kategori', 'buku.id_kategori', 'kategori.id_kategori');
    } catch (error){
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        return await db('buku')
            .where('id_buku', id)
            .select('*')
            .join('kategori', 'buku.id_kategori', 'kategori.id_kategori')
            .first();
    } catch (error){
        throw error;
    }
}

exports.create = async (book) => {
    try {
        return await db('buku').insert(book);
    } catch (error){
        throw error;
    }
}

exports.update = async (id, book) => {
    try {
        const check = await db('buku').where('id_buku', id).select('id_buku').first();
        if (!check) {
            return false;
        }
        return await db('buku').where('id_buku', id).update(book);
    } catch (error){
        throw error;
    }
}

exports.deleteBook = async (id) => {
    try {
        const check = await db('buku').where('id_buku', id).select('id_buku').first();
        if (check) {
            return await db('buku').where('id_buku', id).del();
        }
        return false;
    } catch (error){
        throw error;
    }
}

exports.checkCategoryExist = async (id) => {
    try {
        const check = await db('kategori').where('id_kategori', id).select('id_kategori').first();
        if (check) {
            return true;
        }
        return false;
    } catch (error){
        throw error;
    }
}