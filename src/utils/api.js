// import axios from 'axios';
// import {BASE_URL} from './Constants';

// // Base URL for API
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// // Create an Axios instance to handle requests
// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // GET Request Example (Fetch Data)
// export const fetchData = async (endpoint) => {
//     try {
//         const response = await axiosInstance.get(endpoint);
//         return response.data; // Return the data from the response
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error; // Rethrow error to be handled in components
//     }
// };

// // POST Request Example (Create a new record)
// export const createRecord = async (endpoint, data) => {
//     try {
//         const response = await axiosInstance.post(endpoint, data);
//         return response.data; // Return the created record's data
//     } catch (error) {
//         console.error('Error creating record:', error);
//         throw error; // Rethrow error to be handled in components
//     }
// };

// // You can add more API methods here for PUT, DELETE, etc.

import axios from 'axios';
import { BASE_URL } from './Constants';

// Base Axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// API functions

export const callApi = async ({ endpoint, method = 'GET', data = null, params = null, headers = {} }) => {
    try {
        // Configure Axios request
        const config = {
            method,
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
                ...headers, // Allow custom headers
            },
            withCredentials: true, // Handles cookies for cross-origin requests
        };

        // Add request data for POST/PUT methods
        if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {
            config.data = data;
        }

        // Add query params for GET methods
        if (method.toUpperCase() === 'GET' && params) {
            config.params = params;
        }

        // Make the API call
        const response = await api(config);
        return response.data;
    } catch (error) {
        console.error(`Error during API call to ${endpoint}:`, error);
        throw error;
    }
};

export const homeDiseaseCare = async () => {
    const data = await callApi({
        endpoint: '/home_disease_care',
        method: 'GET',
        params: { filter: 'active', limit: 10 },
    });
    // console.log(data);
    return data;
};

export const organsList = async () => {
    const data = await callApi({
        endpoint: '/organs',
        method: 'GET',
        params: { search: '', record_per_page: 24, page: 1 },
    });
    console.log("Organs List:",data);
    return data;
};

export const getHospitalClinicList = async ({ filter, limit, offset, search, organs_operated, latitude, longitude, diseaseId }) => {
    try {
        // Create FormData object
        const formData = new FormData();
        if (filter) formData.append('filter', filter);
        if (limit) formData.append('limit', limit);
        if (offset) formData.append('offset', offset);
        if (search) formData.append('search', search);
        if (organs_operated) formData.append('organs_operated', organs_operated);
        if (latitude) formData.append('latitude', latitude);
        if (longitude) formData.append('longitude', longitude);
        if (diseaseId) formData.append('disease_id', diseaseId);

        // Use callApi utility to handle the request
        const data = await callApi({
            endpoint: '/hospital_clinic_list',
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    } catch (error) {
        console.error('Error fetching hospital clinic list:', error);
        throw error;
    }
};



export const patientPinGenerate = async (mobile) => {
    const formData = new FormData();
    formData.append('mobile', mobile);
    return api.post('/patient_pin_generate', formData);
};

export const patientPinSaved = async (pin, mobile) => {
    const formData = new FormData();
    formData.append('pin', pin);
    formData.append('mobile', mobile);

    return api.post('/patient_pin_saved', formData);
};

export const patientLogin = async (to, cookie) => {
    const formData = new FormData();
    formData.append('to', to);

    return api.post('/patient_login', formData, {
        headers: { Cookie: cookie },
    });
};

export const patientPinVerify = async (pin, mobile, cookie) => {
    const formData = new FormData();
    formData.append('pin', pin);
    formData.append('mobile', mobile);

    return api.post('/patient_pin_varify', formData, {
        headers: { Cookie: cookie },
    });
};

export const loginVerifyOtp = async (otp, mobile, cookie) => {
    const formData = new FormData();
    formData.append('otp', otp);
    formData.append('mobile', mobile);

    return api.post('/login_verify_otp_post', formData, {
        headers: { Cookie: cookie },
    });
};


export const getAllDoctors = async (search = '', latitude = '', longitude = '', cookie) => {
    const formData = new FormData();
    formData.append('search', search);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);

    return api.post('/get_all_doctors', formData, {
        headers: { Cookie: cookie },
    });
};

export const addPatientBooking = async (bookingDetails, cookie) => {
    const formData = new FormData();
    Object.entries(bookingDetails).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return api.post('/add_patient_booking', formData, {
        headers: { Cookie: cookie },
    });
};

export const getHospitalDetailsById = async (hospitalId, departmentId, cookie) => {
    const formData = new FormData();
    formData.append('hospital_id', hospitalId);
    formData.append('department_id', departmentId);

    return api.post('/hospital_details_by_id', formData, {
        headers: { Cookie: cookie },
    });
};

export const getSchedulesByDoctorId = async (hospitalId, doctorId, startDate, endDate, cookie) => {
    const formData = new FormData();
    formData.append('hospital_id', hospitalId);
    formData.append('doctor_id', doctorId);
    formData.append('start_date', startDate);
    formData.append('end_date', endDate);

    return api.post('/get_schedules_by_doctor_id', formData, {
        headers: { Cookie: cookie },
    });
};

export const editPatientData = async (data, cookie) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return api.post('/edit_patient_data', formData, {
        headers: { Cookie: cookie },
    });
};

export const getPatientData = async (cookie) => {
    return api.post('/get_patient_data', {}, {
        headers: { Cookie: cookie },
    });
};

export const updatePatientBooking = async (updateDetails, cookie) => {
    const formData = new FormData();
    Object.entries(updateDetails).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return api.post('/update_patient_booking', formData, {
        headers: { Cookie: cookie },
    });
};

export const rescheduleBooking = async (bookingId, bookingDate, bookingTime, cookie) => {
    const formData = new FormData();
    formData.append('booking_id', bookingId);
    formData.append('booking_date', bookingDate);
    formData.append('booking_time', bookingTime);

    return api.post('/reshedule_booking', formData, {
        headers: { Cookie: cookie },
    });
};

export const cancelBooking = async (bookingId, cookie) => {
    const formData = new FormData();
    formData.append('booking_id', bookingId);

    return api.post('/cancel_booking', formData, {
        headers: { Cookie: cookie },
    });
};

export const getSlotAvailability = async (availabilityDetails, cookie) => {
    const formData = new FormData();
    Object.entries(availabilityDetails).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return api.post('/get_slot_availability', formData, {
        headers: { Cookie: cookie },
    });
};

export const getDoctorDetailsById = async (doctorId, cookie) => {
    const formData = new FormData();
    formData.append('doctor_id', doctorId);

    return api.post('/get_doctor_details_by_id', formData, {
        headers: { Cookie: cookie },
    });
};

export const getPatientBookingList = async (cookie) => {
    return api.post('/patient_booking_list', {}, {
        headers: { Cookie: cookie },
    });
};
