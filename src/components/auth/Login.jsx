// Login.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField, Modal, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import theme, { Toast } from '../../theme';
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";

const Login = ({ open = false, handleClose = () => { } }) => {
  const { getOtp, verifyOtp, verifyPin, resendOtp, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false); // Set flag true or false to toggle between phone number and OTP form for testing
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const numberInputRef = useRef(null); // Create a ref for the PhoneInput field
  const otpInputRef = useRef(null); // Create a ref for the OTP input field
  const pinInputRef = useRef(null);

  // Manage focus when the modal opens or when the flag changes (for switching between forms)
  useEffect(() => {
    if (open && !flag) {
      setTimeout(() => {
        numberInputRef.current?.focus();
      }, 100);
    } else if (open && flag) {
      setTimeout(() => {
        otpInputRef.current?.focus();
      }, 100);
    } else {
      setTimeout(() => {
        pinInputRef.current?.focus();
      }, 100);
    }
  }, [open, flag]);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setSuccess("Login with Google successful!"); setOpenToast(true);
      handleClose(); // Close modal after successful login
      setFlag(false);
      navigate("/logged-user");
    } catch (error) {
      setError(error.message);
      setOpenToast(true);
    }
  };
  
  const handleGetOtp = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages
    const response = await getOtp(number);
    setSuccess("OTP has been sent successfully...!"); setOpenToast(true);
    if (response.success) {
      setFlag(true);
    } else {
      setError("Failed to send OTP. Please try again."); setOpenToast(true);
      setFlag(false);
    }
  };
  
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages
    const response = await verifyOtp(otp, number);
    if (!/^\d{4}$/.test(otp)) {
      setError("Please enter a valid 4-digit OTP."); setOpenToast(true);
      return { success: false };
    }
    if (response.success) {
      setSuccess("OTP verification successful. Redirecting..."); setOpenToast(true);
      // setTimeout(() => {
      //   setFlag(false);
      //   navigate("/logged-user");
      // }, 3000);
    } else {
      // setError(response.message);
      setError("OTP verification failed!"); setOpenToast(true);
    }
  };
  
  const handleVerifyPin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages
    const response = await verifyPin(pin, number);
    if (!/^\d{4}$/.test(otp)) {
      setError("Please enter a valid 4-digit PIN."); setOpenToast(true);
      return { success: false };
    }
    if (response.success) {
      setSuccess("PIN verification successful. Redirecting..."); setOpenToast(true);
      setTimeout(() => {
        setFlag(false);
        navigate("/logged-user");
      }, 3000);
    } else {
      // setError(response.message);
      setError("OTP verification failed!"); setOpenToast(true);
    }
  }


  const handleResendOtp = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages
    const response = await resendOtp(number);
    setSuccess("A new OTP has been sent successfully...!"); setOpenToast(true); // Show success message
    if (response.success) {
      setFlag(true);
    } else {
      setError("Failed to resend a new OTP. Please try again."); setOpenToast(true);
      setFlag(false);
    }
  };

  const DividerWithOR = () => (
    <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
      <Divider sx={{ display: { xs: "block", sm: "block" }, flex: 1 }} />
      <Typography sx={{ mx: 2 }}>OR</Typography>
      <Divider sx={{ display: { xs: "block", sm: "block" }, flex: 1 }} />
    </Box>
  );

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenToast(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: 'blur(5px)' }}
      >
        <Box
          sx={{
            position: "relative",
            width: 320,
            height: 450,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 240,
            p: 4,
            backdropFilter: 'none',
          }}
        >
          {/* Close button */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h4" id="modal-title" sx={{ textAlign: "center", my: 3 }}>Welcome back</Typography>

          {/* Form to get the phone number and send OTP */}
          <Box component="form" id="sendOtpForm" name="sendOtpForm" onSubmit={handleGetOtp} sx={{ display: !flag ? "block" : "none" }}>
            <Box sx={{ my: 3 }}>
              <PhoneInput
                ref={numberInputRef} // Attach the ref to the PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
                // inputComponent={TextField}
                required
                autoFocus
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 5 }}>
              <Link to="/">
                <Button variant="outlined" color="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Send OTP
              </Button>
            </Box>
          </Box>

          {/* Form to verify the OTP */}
          <Box component="form" id="verifyOtpForm" name="verifyOtpForm" onSubmit={handleVerifyOtp} sx={{ display: flag ? "block" : "none" }}>
            <Box sx={{ my: 5 }}>
              <TextField
                inputRef={otpInputRef} // Attach the ref to the OTP TextField
                fullWidth
                id="verifyOtp"
                name="verifyOtp"
                label="Enter OTP"
                variant="outlined"
                InputLabelProps={{ style: { color: theme.palette.primary.main } }}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                autoFocus
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="outlined" color="secondary" onClick={handleResendOtp}>
                Resend OTP
              </Button>
              {/* <Button type="submit" variant="contained" color="primary">
                Verify
              </Button> */}
            </Box>
          </Box>

          {/* Form to Enter PIN */}
          <Box component="form" id="verifyPin" name="verifyPin" onSubmit={handleVerifyPin} sx={{ display: flag ? "block" : "none" }}>
            <Box sx={{ my: 5 }}>
              <TextField
                inputRef={pinInputRef} // Attach the ref to the OTP TextField
                fullWidth
                id="verifyPin"
                name="verifyPin"
                label="Enter PIN"
                variant="outlined"
                InputLabelProps={{ style: { color: theme.palette.primary.main } }}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                autoFocus
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              <Button type="submit" variant="contained" color="primary">
                Verify
              </Button>
            </Box>
          </Box>

          <DividerWithOR />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 3 }}>
            <GoogleButton
              label="Continue with Google"
              onClick={handleGoogleSignIn}
              // className="g-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #7258BC",
                boxShadow: "0px 5px 20px rgba(114, 88, 188, 0.5)",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Modal>

      <Toast
        open={openToast}
        onClose={handleToastClose}
        handleClose={() => setOpenToast(false)}
        autoHideDuration={5000}
        message={error || success}
        severity={error ? "error" : "success"}
      />
    </>
  );
};

export default Login;