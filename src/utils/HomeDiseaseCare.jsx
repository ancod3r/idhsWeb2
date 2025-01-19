import React, { useEffect, useState } from 'react';
import { homeDiseaseCare } from './api';

const HomeDiseaseCare = () => {
    const [diseases, setDiseases] = useState([]);
    const [organs, setOrgans] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await homeDiseaseCare(); // Fetch the API response
                if (response.status) {
                    // Set the diseases and organs arrays from the API response
                    setDiseases(response.data.diseases);
                    setOrgans(response.data.organs);
                } else {
                    throw new Error(response.message || "Failed to fetch data");
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Home Disease Care</h1>
            {error && <p>Error: {error}</p>}

            {/* Display Diseases */}
            <section>
                <h2>Diseases</h2>
                {diseases.length > 0 ? (
                    <ul>
                        {diseases.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading diseases...</p>
                )}
            </section>

            {/* Display Organs */}
            <section>
                <h2>Organs</h2>
                {organs.length > 0 ? (
                    <ul>
                        {organs.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading organs...</p>
                )}
            </section>
        </div>
    );
};

export default HomeDiseaseCare;
