const express = require('express');
const router = express.Router();
const pet_controller = require('../controllers/pet_controller.js');

router.post('/', pet_controller.createPet);
router.get('/', pet_controller.getPets);
router.get('/:id', pet_controller.getPetById);
router.put('/:id', pet_controller.updatePet);
router.delete('/:id', pet_controller.deletePet);

module.exports = router;
