import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import CustomerGrievanceRedressalPolicy from './pages/CustomerGrievanceRedressalPolicy';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/layout/Layout';
import Protected from "./components/auth/Protected";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import UserHome from './pages/user/UserHome';
import TopHospitals from './components/ui/hospitals/TopHospitals'; 
import HospitalDetails from './components/ui/hospitals/HospitalDetails';
import TopDoctors from "./components/ui/doctors/TopDoctors";
import DoctorDetails from "./components/ui/doctors/DoctorDetails";
import LoggedUser from './pages/user/LoggedUser';
import GetApp from './pages/GetApp';
import TimeSlotBooking from './components/ui/booking-page/Slot';
// import HospitalList from './utils/HospitalList';
// import HomeDiseaseCare from './utils/HomeDiseaseCare';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      // { path: '', element: <HospitalList /> },
      // { path: '', element: <HomeDiseaseCare /> },
      { path: '', element: <Home /> },
      { path: 'get-app', element: <GetApp /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'top-hospitals', element: <TopHospitals /> },
      { path: 'top-doctors', element: <TopDoctors /> },
      { path: 'time-slot-booking', element: <TimeSlotBooking /> },
      { path: 'terms-conditions', element: <TermsConditions /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'refund-policy', element: <RefundPolicy /> },
      { path: 'CustomerGrievanceRedressalPolicy', element: <CustomerGrievanceRedressalPolicy /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    path: '/home',
    element: (
      <Protected>
        <Layout />
        <LoggedUser />
      </Protected>
    ),
    children: [
      { path: '', element: <Home /> },
    ],
  },
  {
    path: '/top-hospitals',
    element: (
      <Layout/>
    ),
    children: [
      { path: 'hospitals', element: <TopHospitals /> },
      { path: 'clinics', element: <TopHospitals /> },
      { path: ':name/details/:id', element: <HospitalDetails /> },
    ],
  },
  {
    path: '/top-doctors',
    element: (
      <Layout/>
    ),
    children: [
      { path: 'details/:id', element: <DoctorDetails /> },
    ],
  },
  {
    path: '/logged-user',
    element: (
      // <Protected>
        <UserHome />
      // </Protected>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserAuthContextProvider>
      <RouterProvider router={router} />
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;