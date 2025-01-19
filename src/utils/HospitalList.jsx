import React, { useEffect, useState } from 'react';
import { getHospitalClinicList } from './api'; // Adjust the path to api.js file

const HospitalList = () => {
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHospitalList = async () => {
            const filter = '';
            const limit = '';
            const offset = '';
            const search = '';
            const organs_operated = '';
            const latitude = '25.554099628587245';
            const longitude = '84.66649996116757';
            const diseaseId = '';
            try {
                const response = await getHospitalClinicList(filter, limit, offset, search, organs_operated, latitude, longitude, diseaseId);
                setHospitals(response.data);
                console.log('New hospitals list:', hospitals);
            } catch (err) {
                console.error('Error fetching hospitals:', err);
                setError(err.message);
            }
        };

        fetchHospitalList();
        console.log('New hospitals list:');
    }, []);
    
    console.log('New hospitals list:');
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Hospital List</h1>
            {hospitals.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {hospitals.map((hospital, index) => (
                        <li key={index}>{hospital.name}</li> // Adjust 'name' to match your API response
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HospitalList;
