const db = require('../config/db');

exports.addVehicle = (req, res) => {
    const { make, model, body_type, registration_number, mileage, engine_cc, fuel_type, year_of_manufacture, district, grade, exterior_color, interior_color, num_of_owners } = req.body;

    const query = `INSERT INTO vehicles (make, model, body_type, registration_number, mileage, engine_cc, fuel_type, year_of_manufacture,
     district, grade, exterior_color, interior_color, num_of_owners) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [make, model, body_type, registration_number, mileage, engine_cc, fuel_type, year_of_manufacture, district, grade, exterior_color, interior_color, num_of_owners], (err, result) => {
        if (err) return res.status(400).send(err);
        res.status(201).send('Vehicle added successed');
    });
};
