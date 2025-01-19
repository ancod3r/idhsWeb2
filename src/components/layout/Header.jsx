// Header.jsx
import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import theme, { navLinkStyle, navLinkMobile } from "../../theme";
import { useUserAuth } from "../../context/UserAuthContext";
import Login from "../auth/Login";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const [openLoginModal, setOpenLoginModal] = useState(false); // Modal state for login
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const currentPath = location.pathname; // Get the current path
    const { user, logOut } = useUserAuth(); // Pull the user from context
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); setIsDrawerOpen(true); };
    const handleCloseNavMenu = () => { setAnchorElNav(null); setIsDrawerOpen(false); };

    const handleOpenProfileMenu = (event) => { setAnchorElProfile(event.currentTarget); };

    const handleCloseProfileMenu = () => { setAnchorElProfile(null); };
    // const handleLoginOpen = () => setOpenLoginModal(true);
    // const handleLoginClose = () => setOpenLoginModal(false);
    
    const handleLoginOpen = () => {
        setOpenLoginModal(true);
        if (currentPath !== '/login') {
            setOpenLoginModal(true);
            navigate('/login', { replace: false });
            setOpenLoginModal(true);
        }
    };
    const handleLoginClose = () => {
        setOpenLoginModal(false);
        if (currentPath === '/login') {
            navigate(-1); // Go back to the previous URL when closing the modal
        }
    };
    const handleLogin = () => { <Login /> };
    const handleProfile = () => {
        navigate("/logged-user");
    };
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    // console.log("User in Header:", user);
    return (
        <AppBar position="sticky" elevation={1}
            sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main,
                [theme.breakpoints.down("sm")]: {
                height: "60px", 
                minHeight: "3vh",
                maxHeight: "60px",
                },
                [theme.breakpoints.up("xs")]: {
                height: "70px",
                minHeight: "3vh",
                maxHeight: "100px", 
                },
                }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: "space-between",
                [theme.breakpoints.down("sm")]: {
                    minHeight: "50px",
                    padding: "0 8px",
                    margin: "-10px auto",
                },
                // [theme.breakpoints.down("md")]: {
                //     minHeight: "50px",
                //     padding: "0 8px",
                //     margin: "-10px auto",
                // },
                [theme.breakpoints.up("xs")]: {
                    minHeight: "50px",
                    padding: "0 8px",
                    margin: "-10px auto",
                },
                }}>
                {/* </IconButton> */}
                    <IconButton
                        component={NavLink}
                        to="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            // "&:hover img": {
                                // transform: "scale(1.2)", // Default scale on hover
                                // transition: "transform 0.3s ease-in-out",
                            // },
                            "@media (max-width:600px)": {
                                // "&:hover img": {
                                    // transform: "scale(1.05)", // Smaller scale for mobile devices
                                // },
                            },}}>
                    <img src="/KailashUpchar192.png" alt="Logo" style={{ height: "50px", width: "auto" }}/>
                    <Typography variant="body1" component="div" sx={{ ml: 2, color: theme.palette.third.main, fontWeight: "900", display: { xs: "none", sm: "none", md: "block" },}}>
                        IDHS
                    </Typography>
                    </IconButton>
                    <Box sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "flex", md: "none" },
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <IconButton
                            component={NavLink}
                            to="/"
                            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                        >
                            <img
                                src="/KailashUpchar192.png"
                                alt="Logo"
                                style={{ height: "49px", width: "auto" }}
                            />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        {/* Hamburger Icon */}
                        {isDrawerOpen ? (
                            <CloseIcon />
                            ) : (
                            <MenuIcon />
                        )}
                        </IconButton>
                    </Box>
{/* Mobile View Drawer Hamburger */}
                    <Drawer anchor="left" open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                    ModalProps={{ disableScrollLock: true, }}// Prevents body scroll locking
                    sx={{
                        "& .MuiPaper-root": {
                            // borderRadius: "5px", // Rounded corners for better aesthetics
                            backgroundColor: theme.palette.background.default,
                            color: theme.palette.primary.main,
                            width: '65%',
                            height: '100vh',
                            // [theme.breakpoints.down("md")]: { width: '50%' }
                            }
                        }}>
                    <Box role="presentation"
                    onClick={handleCloseNavMenu} // Automatically close drawer on interaction
                    onKeyDown={handleCloseNavMenu} // Handle keyboard events to close drawer
                    >
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/" onClick={handleCloseNavMenu}>
                            <ListItemText
                                primary="Home"
                                sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/get-app" onClick={handleCloseNavMenu}>
                            <ListItemText
                                primary="Medicines & Health Devices"
                                sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/top-doctors" onClick={handleCloseNavMenu}>
                            <ListItemText
                            primary="Services"
                            sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/top-hospitals" onClick={handleCloseNavMenu}>
                            <ListItemText
                            primary="About Us"
                            sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/contact" onClick={handleCloseNavMenu}>
                            <ListItemText
                            primary="Call 1800 425 3800"
                            sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/login" onClick={handleCloseNavMenu}>
                            <ListItemText
                            primary="Login"
                            sx={{ textAlign: "left", color: theme.palette.primary.main }}/>
                        </ListItemButton>
                    </ListItem>
                    </List>
                    </Box>
                </Drawer>
{/* Mobile View Ends */}

{/* Desktop View */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "left", alignItems: "center" }}>
                        {/* <Button component={NavLink} to="/" sx={{ my: 2, color: theme.palette.primary.main, display: "block"}}>Home</Button> */}
                        <Button component={NavLink} fontFamily={'Poppins'} to="/get-app" sx={navLinkStyle}>Medicines & Health Devices</Button>
                        <Button component={NavLink} fontFamily={'Poppins'} to="/top-doctors" sx={navLinkStyle}>Services</Button>
                        <Button component={NavLink} fontFamily={'Poppins'} to="/top-hospitals" sx={navLinkStyle}
                            // sx={{ mx: 3, color: theme.palette.text.main,
                                // display: "block",
                                // margin: "8px",
                            // }}
                            >
                            About Us
                        </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "right" }}>
                        <Button component={NavLink} to="/contact" sx={{ my: 2, mx: 2, color: theme.palette.third.alt, display: "block",}} onClick={() => (window.location.href = "tel:18004253800")}>
                            <span style={{ color: '#10217D', fontWeight: '400' }}>Call</span>
                            <span style={{ color: '#10217D', fontWeight: '900' }}>  1800 425 3800 </span>
                            <span style={{ color: '#10217D', fontWeight: '400' }}>  or</span>
                            {/* Call 1800 425 3800 or */}
                        </Button>
                        <Button component={NavLink} to="/consult-online"
                            sx={{ my: 2, ml: 2, padding: '0px 20px 0px 20px', color: theme.palette.text.secondary, backgroundColor: theme.palette.third.alt,
                                display: 'flex',          // Use flexbox to align items
                                justifyContent: 'center', // Horizontally center text
                                alignItems: 'center',     // Vertically center text
                                borderRadius: "32px",
                            }}>
                            Consult Online
                        </Button>
                    </Box>
                     {/* Profile Button */}
                    <Box sx={{ flexGrow: 0 }} display={{ xs: "none", md: "none", lg: "flex", sm: "none" }}>
                        <IconButton onClick={handleOpenProfileMenu}
                            sx={{ color: theme.palette.primary.main }}>
                            {user && user.photoURL ? (
                                <Avatar src={user.photoURL} alt="Profile" />
                            ) : (
                                // <MenuIcon fontSize="large" />
                                <AccountCircleIcon fontSize="large" />
                            )}
                        </IconButton>
                        <Menu anchorEl={anchorElProfile} open={Boolean(anchorElProfile)} onClose={handleCloseProfileMenu}
                            sx={{ // mt: "45px",
                                "& .MuiPaper-root": {
                                    border: "2px solid #00b29a",
                                    borderRadius: "8px",
                                    backgroundColor: theme.palette.background.default,
                                    color: theme.palette.primary.main,
                                },}}>
                            {user ? (
                                <>
                                    <MenuItem onClick={() => {
                                        handleProfile();
                                        handleCloseProfileMenu();
                                    }}>
                                        My Profile
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                        handleLogout();
                                        handleCloseProfileMenu();
                                    }}>
                                        Logout
                                    </MenuItem>
                                </>
                            ) : (
                                <MenuItem onClick={() => {
                                    handleLoginOpen();
                                    handleCloseProfileMenu();
                                }}>
                                    Login
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                    {/* {user && (user.email || user.number) ? (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={handleLoginOpen}>
                            Login
                        </Button>
                    )} */}
                </Toolbar>
            </Container>
            <Login open={openLoginModal} handleClose={handleLoginClose} />
        </AppBar>
    );
};

export default Header;