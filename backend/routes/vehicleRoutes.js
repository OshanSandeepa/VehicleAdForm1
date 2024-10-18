const express = require('express');
const { addVehicle } = require('../controllers/vehicleController');

const router = express.Router();

router.post('/vehicles', addVehicle);

module.exports = router;
