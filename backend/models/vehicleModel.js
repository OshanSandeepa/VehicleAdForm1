const db = require('../config/db');

const createVehicleTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS vehicles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        make VARCHAR(255),
        model VARCHAR(255),
        body_type VARCHAR(255),
        registration_number VARCHAR(255),
        mileage INT,
        engine_cc INT,
        fuel_type VARCHAR(255),
        year_of_manufacture YEAR,
        district VARCHAR(255),
        grade VARCHAR(255),
        exterior_color VARCHAR(255),
        interior_color VARCHAR(255),
        num_of_owners INT,
        imgs LONGBLOB 
    )`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log("Vehicle table created");
    });
};

module.exports = { createVehicleTable };
