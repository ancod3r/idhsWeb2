import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { useUserAuth } from '../../context/UserAuthContext';
import Cookies from "js-cookie";
import TopHospitals from "../../components/ui/hospitals/TopHospitals";
import ProfileData   from '../../context/ProfileData';

const LoggedUser = () => {
    const { user } = useUserAuth();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    useEffect(() => {
        // Check if user is available from context
        
        if (user) {
            if (user.number) {
                setPhoneNumber(user.number);
                setOtp(user.otp || Cookies.get("otp") || "N/A");
            } else if (user.email) {
                setPhoneNumber(user.email);
            }
            else {
                const storedPhoneNumber = Cookies.get("userAuth");
                setPhoneNumber(storedPhoneNumber || "Guest");
            }
        } else {
            // Fallback to cookies if user is not set in context
            const storedPhoneNumber = Cookies.get("userAuth");
            const storedOtp = Cookies.get("otp");
            setPhoneNumber(storedPhoneNumber || "Guest");
            setOtp(storedOtp || "N/A");
        }
    }, [user]);
    
    if (!phoneNumber) {
        return <Typography variant="h6">Loading...</Typography>;
    }
    
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 600, margin: 'auto', textAlign: 'center', mt: 5 }}>
            <Typography variant="h4">
                Hello, Welcome <br /> {phoneNumber}
            </Typography>
            <Typography variant="h6">
            <br />You have entered: {otp}
            </Typography>
            <ProfileData />
        </Box>
            <TopHospitals />
        </>
    );
};

export default LoggedUser;