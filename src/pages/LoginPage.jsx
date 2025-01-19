// components/LoginPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Home from './Home';
import SearchBar from '../components/ui/search/SearchBar';

const LoginPage = () => {
    const [flag, setFlag] = React.useState(false);
    const navigate = useNavigate();

    // Set flag to true when the component mounts
    // Also type /login in url to show the modal then needs to double click close button to close modal
    useEffect(() => {
        setFlag(true); // Show the modal when entering this page
    }, []);

    // Handle closing the modal
    const handleClose = () => {
        navigate(-1);  // Navigate back in the browser history
        return setFlag(false); // Set flag to false to hide the modal
    };

    return (
        <>
            {/* Render Home, or other components, in the background or remove background make it transparent */}
            <Home />
            {/* <SearchBar/> */}
            <Login open={flag} handleClose={handleClose} /> {/* Show Login modal */}
        </>
    );
};

export default LoginPage;