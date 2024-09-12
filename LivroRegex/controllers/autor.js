const autor = require('../models/autor.js');

exports.createAutor = async (req, res) => {
    try {
        const Autor = await autor.create(req.body);
        res.status(201).json(Autor);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar Autor' });
    }
};

exports.getAutor = async (req, res) => {
    try {
        const Autor = await autor.find().populate('id_autor');
        res.status(200).json(Autor);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar Autor' });
    }
};

exports.getAutorById = async (req, res) => {
    try {
        const Autor = await autor.findById(req.params.id).populate('id_autor');
        res.status(200).json(Autor);
    } catch (error) {
        res.status(404).json({ error: 'autor não encontrado' });
    }
};

exports.updateAutor = async (req, res) => {
    try {
        const Autor = await autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(Autor);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar Autor' });
    }
};

exports.deleteAutor = async (req, res) => {
    try {
        await autor.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar Autor' });
    }
};
