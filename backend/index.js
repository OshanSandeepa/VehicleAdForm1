const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');
const { createVehicleTable } = require('./models/vehicleModel');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', vehicleRoutes);

createVehicleTable();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
