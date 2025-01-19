import React, { useEffect, useState } from 'react';
import { useUserAuth } from './UserAuthContext';

function ProfileData() {
    const { getPatientData } = useUserAuth();
    const [profileData, setProfileData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        let isMounted = true; // To avoid setting state on an unmounted component
        const fetchData = async () => {
            try {
                const response = await getPatientData();
                console.log("getPatientData response:", response);

                if (isMounted) {
                    if (response.success && response.user && response.user.length > 0) {
                        setProfileData(response.user[0]); // Update profileData state
                    } else {
                        setErrorMessage(response.message || "Failed to load profile data.");
                    }
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error fetching profile data:", error);
                    setErrorMessage("An unexpected error occurred while fetching data.");
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Cleanup function to prevent memory leaks
        };
    }, [getPatientData]);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Profile Information</h2>
            {errorMessage ? (
                <p style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</p>
            ) : profileData ? (
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>User ID:</strong> {profileData.user_id || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>First Name:</strong> {profileData.firstname || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Last Name:</strong> {profileData.lastname || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Email:</strong> {profileData.email || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>User Role:</strong> {profileData.user_role || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Designation:</strong> {profileData.designation || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Department ID:</strong> {profileData.department_id || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Address:</strong> {profileData.address || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Mobile:</strong> {profileData.mobile || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Date of birth:</strong> {profileData.date_of_birth || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>sex:</strong> {profileData.sex || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>create_date:</strong> {profileData.create_date || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>user_pin:</strong> {profileData.user_pin || 'N/A'}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>consultancy_validity:</strong> {profileData.consultancy_validity || 'N/A'}
                    </div>
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: '#777' }}>Loading profile data...</p>
            )}
        </div>
    );
}

export default ProfileData;
