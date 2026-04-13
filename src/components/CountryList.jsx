import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/countries');
            setCountries(res.data);
        } catch (err) {
            console.error("Error fetching countries:", err);
        }
    };

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete this country?')) {
            try {
                await axios.delete(`http://localhost:5000/api/countries/${id}`);
                fetchCountries(); // Refresh list after delete
            } catch (err) {
                console.error("Error deleting country:", err);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Countries</h2>
            <div className="row">
                {countries.map(country => (
                    <div className="col-md-4 mb-4" key={country._id}>
                        <div className="card h-100 shadow-sm">
                            {country.flagImage && (
                                <img 
                                    src={`http://localhost:5000/${country.flagImage}`} 
                                    className="card-img-top" 
                                    alt={country.name} 
                                    style={{height: '250px', objectFit: 'cover'}} 
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{country.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Capital: {country.capital}</h6>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(country._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryList;