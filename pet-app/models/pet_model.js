const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    apelido: String,
});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
