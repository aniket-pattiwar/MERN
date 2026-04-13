import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCountry = () => {
    const [formData, setFormData] = useState({ name: '', capital: '' });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
         const data = new FormData();
 
         data.append('name', formData.name);
         data.append('capital', formData.capital);
 
         if (file) {
             data.append('flagImage', file);
         }
 
         await axios.post('http://localhost:5000/api/countries/add', data);
 
         navigate('/');
     } catch (err) {
         alert('Error adding country');
         console.error(err);
     }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow p-4" style={{maxWidth: '600px', margin: '0 auto'}}>
                <h2 className="mb-3">Add New Country</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Capital</label>
                        <input type="text" name="capital" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Flag Image</label>
                        <input type="file" className="form-control" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Country</button>
                </form>
            </div>
        </div>
    );
};

export default AddCountry;