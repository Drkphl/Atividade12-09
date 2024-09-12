const Livro = require('../models/livro.js');

exports.createLivro = async (req, res) => {
    try {
        const livro = await Livro.create(req.body);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar livro' });
    }
};

exports.getLivros = async (req, res) => {
    try {
        const livros = await Livro.find().populate('id_livro');
        res.status(200).json(livros);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar livros' });
    }
};

exports.getLivroById = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);
        res.status(200).json(livro);
    } catch (error) {
        res.status(404).json({ error: 'Livro não encontrado' });
    }
};

exports.updateLivro = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar livro' });
    }
};

exports.deleteLivro = async (req, res) => {
    try {
        await Livro.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar livro' });
    }
};
