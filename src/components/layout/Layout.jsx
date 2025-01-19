import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Login from '../auth/Login';
// import { useUserAuth } from "../../context/UserAuthContext";

export const Loading = () => {
  return (
    <div className="container loader-section">
      <div className="loader"></div>
    </div>
  );
};

const Layout = ({ children = null }) => {
  // const {userLocation} = useUserAuth();
  const navigation = useNavigation();
  // console.log("Loading State: ", navigation.state);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Login />
      {/* Conditionally render Loading component inside Layout based on navigation state */}
      {navigation.state === 'loading' ? (
        <Loading />
      ) : (
        <Box sx={{ flex: '1 0 auto', my: 10 }}>
          {children || <Outlet />}
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default Layout;
