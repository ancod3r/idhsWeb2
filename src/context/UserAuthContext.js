import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BASE_URL, AES_SECRET_KEY, AES_SECRET_IV, GOOGLE_MAPS_API_KEY } from "../utils/Constants";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const userAuthContext = createContext();
// Utility function for formatting the phone number
const formatPhoneNumber = (number) => number.replace(/\D/g, '').slice(-10);

// UserAuthContextProvider to provide authentication-related functions
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [number, setNumber] = useState("");
  const [otpData, setOtpData] = useState(null); // State for OTP data
  // const [userLocation, setUserLocation] = useState(null); // State to store user's location
  const [userLocation, setUserLocation] = useState(JSON.parse(localStorage.getItem("userLocation"))); // State to store user's location
  const [placeName, setPlaceName] = useState(null); // State to store user's place name

  // Function to handle OTP request
  const getOtp = async (number) => {
    setNumber(number);
    try {
      const formattedNumber = formatPhoneNumber(number);
      const formData = new FormData();
      formData.append('to', formattedNumber);
      console.log(`Phone Number Received: ${number}, Formatting Number and Sending Request: ${formattedNumber} to getOtp`);
      // Send a POST request to the OTP API
      const response = await fetch(`${BASE_URL}/patient_login`, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: formData,
        // credentials: "include",
      });
      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        setOtpData(data); // Save OTP data to use for verification, Store OTP data returned from the API if required for verification
        return { success: true }; // Return success status
      } else {
        return { success: false };
      }
    } catch (err) {
      return { success: false };
    }
  };

  // Function to handle OTP verification
  const verifyOtp = async (otp, number) => {
    // AES encryption parameters, Encrypt the phone number using AES 256 CBC
    const formattedNumber = number.replace(/\D/g, '').slice(-10);
    const encryptedNumber = CryptoJS.AES.encrypt(
      formattedNumber,
      CryptoJS.enc.Utf8.parse(AES_SECRET_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(AES_SECRET_IV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();
    console.log(`Number: ${number}, EncryptedNumber: ${encryptedNumber}, FormattedNumber: ${formattedNumber}, OTP: ${otp} Sending Request to verifyOtp`);

    try {
      const formData = new FormData();
      formData.append('otp', otp); // 'otp' field matches what the API accept sends
      formData.append('mobile', encryptedNumber); //Send the encrypted phone number
      // Make the POST request, including cookies
      const response = await fetch(`${BASE_URL}/login_verify_otp_post`, {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'connection': 'keep-alive',
        },
        body: formData,
        credentials: 'include', // Include cookies with the request
      });
      const responseText = await response.text(); // Get response text
      const parsedResponse = JSON.parse(responseText); // Parse response text into JSON format
      // Check if the OTP verification was successful by validating the status
      if (!parsedResponse.status) {
        return { success: false, message: parsedResponse.message };
      }
      // Cookies.set("userPhone", formattedNumber, { expires: 7, secure: true, sameSite: "Strict" });
      Cookies.set("otp", otp, { expires: 7, secure: true, sameSite: "Strict" });
      const phoneUser = { number: formattedNumber };
      // Cookies.set("userAuth", JSON.stringify(phoneUser), { expires: 7, secure: false, sameSite: "Strict" });
      Cookies.set("otp", otp, { expires: 7, secure: false, sameSite: "Strict" });
      setUser(phoneUser); // Update user state with phone details
      // console.log('API JS Response data:', parsedResponse);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };


  const verifyPin = async (pin, number) => {
        // AES encryption parameters, Encrypt the phone number using AES 256 CBC
        const encryptedPin = CryptoJS.AES.encrypt(
          pin,
          CryptoJS.enc.Utf8.parse(AES_SECRET_KEY),
          {
            iv: CryptoJS.enc.Utf8.parse(AES_SECRET_IV),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).toString();
        const formattedNumber = number.replace(/\D/g, '').slice(-10);
        const encryptedNumber = CryptoJS.AES.encrypt(
          formattedNumber,
          CryptoJS.enc.Utf8.parse(AES_SECRET_KEY),
          {
            iv: CryptoJS.enc.Utf8.parse(AES_SECRET_IV),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).toString();
        console.log(`Number: ${number}, EncryptedNumber: ${encryptedNumber}, FormattedNumber: ${formattedNumber}, PIN: ${pin} Sending Request to verifyPin`);
    try {
      const formData = new FormData();
      formData.append('pin', encryptedPin); // 'pin' field matches what the API accept sends
      formData.append('mobile', encryptedNumber); //Send the encrypted phone number
      // Make the POST request, including cookies
      const response = await fetch(`${BASE_URL}/patient_pin_varify`, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          'Accept': '*/*',
          'connection': 'keep-alive',
        },
        // body: JSON.stringify({ pin })
        body: formData,
        credentials: 'include', // Include cookies with the request
      });
      
      const data = await response.json();

      if (response.ok && data.status && data.data.session_key) {
        // Set a secure cookie with the session key
        const phoneUser = { number: formattedNumber };
        Cookies.set("userAuth", JSON.stringify(phoneUser), { expires: 7, secure: false, sameSite: "Strict" });
        Cookies.set("pin", pin, { expires: 7, secure: false, sameSite: "Strict" });
        setUser(phoneUser); // Update user state with phone details
        Cookies.set("ci_sessions", data.data.session_key, {
          expires: 7,  // Session duration (1 day here, adjust as needed)
          secure: false, // Set to true in production for HTTPS
          sameSite: "Strict",
        });

        // setUser(data.user); // Optionally set the user context
        return { success: true, message: data.message ||"PIN verified successfully failed." };
      } else {
        return { success: false, message: data.message || "PIN verification failed." };
      }
    } catch (error) {
      console.error("PIN verification error:", error);
      return { success: false, message: "An error occurred during PIN verification." };
    }
  };

    // Function to retrieve user data using session cookie
    const getPatientData = async () => {
      try {
        // const sessionKey = Cookies.get("ci_sessions");
        // if (!sessionKey) {
        //   throw new Error("Session expired or missing.");
        // }
  
        // Send POST request with session key in headers
        const response = await fetch(`${BASE_URL}/get_patient_data`, {
          method: "POST",
          headers: {
            // 'Accept': 'application/json',
            'Accept': '*/*',
            'connection': 'keep-alive',
            // 'Content-Type': 'application/json',
            // 'Cookie': `ci_sessions=${sessionKey}`
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        // console.log("getPatientData userAuthFunc response:", data);
        // if (response.ok && data.status && Array.isArray(data.data) && data.data.length > 0) {
        if (data.status && Array.isArray(data.data)) {
          // console.log ("getPatientData userAuthFunc data.data:", data.data);
          return { success: true, user: data.data };
        } else {
          throw new Error("User data not found or session expired.");
        }
      } catch (error) {
        // console.error("Error fetching user data:", error);
        logOut(); // Logout if session expired
        return { success: false, message: "Failed to fetch user data." };
      }
    };

  // Function to handle resending OTP
  const resendOtp = async (number) => {
    setNumber(number);
    try {
      const formattedNumber = number.slice(-10);
      const formData = new FormData();
      formData.append('to', formattedNumber);
      console.log(`Phone Number Received: ${number}, Formatting Number and Sending Request: ${formattedNumber} to resendOtp`);
      // Send a POST request to the OTP API
      const response = await fetch(`${BASE_URL}/patient_login`, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: formData,
        // credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setOtpData(data); // Update OTP data
        return { success: true }; // Return success status
      }
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // Log out function for both phone and Google users
  const logOut = async () => {
    try {
      await signOut(auth);
      Cookies.remove("userAuth");
      Cookies.remove("otp");
      Cookies.remove("pin");
      Cookies.remove("ci_sessions");
      setUser(null); // Clear user data on logout
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Google Sign-In function using Firebase Authentication
  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      setUser(result.user);
      // Securely set the user authentication cookie for Google Sign-In
      Cookies.set("userAuth", JSON.stringify({ email: result.user.email }), {
        expires: 7,
        secure: true,
        sameSite: "Strict"
      });
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      throw error;
    }
  };

  // Handle Firebase authentication state changes (Google sign-in)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        const cookieUser = Cookies.get("userAuth");
        if (cookieUser) {
          setUser(JSON.parse(cookieUser));
        } else {
          setUser(null);
        }
      }
    });

    return () => unsubscribe();
  }, []);

    // Function to fetch user location
    const fetchUserLocation = async () => {
      if (!navigator.geolocation) {
        console.error("Geolocation is not supported by this browser.");
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
  
          try {
            const googleMapsUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
            const response = await fetch(googleMapsUrl);
  
            if (!response.ok) {
              console.error("Error fetching place name");
              setUserLocation({ latitude, longitude });
              return;
            }
            
            const locationData = await response.json();
            localStorage.setItem("userLocation", JSON.stringify(locationData));
            const placeName = locationData.results[0]?.formatted_address || null;
            setUserLocation({ latitude, longitude });
            setPlaceName(placeName);
          } catch (error) {
            console.error("Reverse geocoding error:", error);
            setUserLocation({ latitude, longitude });
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    };
  
    // Fetch the user location when the component mounts
    useEffect(() => { fetchUserLocation(); }, []);
    // console.log("User location fetched:", userLocation);
    // console.log("User location fetched:", placeName);

  const value = useMemo(() => ({
    getOtp,
    verifyOtp,
    verifyPin,
    getPatientData,
    resendOtp,
    user,
    logOut,
    googleSignIn,
    userLocation,
    placeName
  }), [user, userLocation, placeName]);

  return <userAuthContext.Provider value={value}>
    {children}
  </userAuthContext.Provider>;
}
export function useUserAuth() {
  return useContext(userAuthContext);
}