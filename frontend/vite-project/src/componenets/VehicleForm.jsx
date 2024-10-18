import React, { useState } from 'react';
import axios from 'axios';

const VehicleForm = () => {
    const [formData, setFormData] = useState({
        make: '', model: '', body_type: '', registration_number: '', mileage: '', engine_cc: '',
        fuel_type: '', year_of_manufacture: '', district: '', grade: '', exterior_color: '',
        interior_color: '', num_of_owners: '',imgs:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/vehicles', formData)
            .then(response => {
                alert('Vehicle successfully added');
            })
            .catch(error => {
                console.error('Vehicle adding error', error);
            });
    };

        



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Vehicle Make <span>*</span></label>
            <input type="text" name="make" placeholder="Toyota" onChange={handleChange} required /><br />
            <label htmlFor="">Vehicle Model <span>*</span></label>
            <input type="text" name="model" placeholder="Aqua" onChange={handleChange} required /><br />

            <label htmlFor="">Body Type</label>
            <input type="text" name="body_type" placeholder="HatchBack" onChange={handleChange} required /><br />

            <label htmlFor="">Vehicle Registration Number <span>*</span></label>
            <input type="text" name="registration_number" placeholder="CBA-XXXX" onChange={handleChange} 
            required /> <br />
            <label htmlFor="">Mileage(km) <span>*</span></label>
            <input type="text" name="mileage" placeholder="100,000" onChange={handleChange} required />
            <h3>test</h3>
            <br />
            <label htmlFor="">Engine CC/kw  <span>*</span></label>
            <input type="text" name="engine_cc" placeholder="1500" onChange={handleChange} required />

            <br />
            <label htmlFor="">Fuel Type <span>*</span></label>
            <input type="text" name="fuel_type" placeholder="" onChange={handleChange} required />

            <br />
            <label htmlFor="">Year Of Manufacture <span>*</span></label>
            <input type="text" name="year_of_manufacture" placeholder="" onChange={handleChange} required />
            <br />
            <label htmlFor="">District <span>*</span></label>
           <select name="District" id="District" onChange={handleChange} required>
                  <option value="Colombo">Colombo</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Matara">Matara</option>
                    
           
            </select>    
            <br />
            <label htmlFor="">Vehicle Grade <span>*</span></label>
            <input type="text" name="grade" placeholder="" onChange={handleChange} required />

            <br />
            <label htmlFor="">Exterior Color</label>
            <input type="text" name="exterior_color" placeholder="" onChange={handleChange} required />

            <br />
            <label htmlFor="">Interior Color </label>
            <input type="text" name="interior_color" placeholder="" onChange={handleChange} required />

            <br />
            <label htmlFor="">No. of Owners</label>
            <input type="text" name="num_of_owners" placeholder="" onChange={handleChange} required />

            <h4>Upload Photos</h4>
                 <div className="imagebox">
                 <label htmlFor="image" className='addimgtext'>Add Image </label>
                 <input type="file" name="imgs" accept="image/*" onChange={handleChange}  /> <br />

                 </div>
                    <div>
                                <h6><i>you can upload up to 3 photos</i></h6>    
                    </div>


                <h5>Set Your Asking  Price</h5>
                 <label htmlFor="">Price <span>* </span></label>
                 <input type="text" name="mileage" placeholder="" onChange={handleChange} required />
                 <br />
                 <h6>Items marked with <span>*</span> are required fields</h6>
            
           
            <button type="submit" class="button2">Publish</button>
            
        </form>
    );
};

export default VehicleForm;
