import React from "react";
import { Container, Box, Typography, Tabs, Tab, Grid, CardContent, CardMedia, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme, { Cards } from "../../../theme"; 
// import home_page_banner from '../../../assets/images/home_page_banner.png';
// import hospitals from '../../../assets/images/hospitals.jpg';
import { LocationOn, Star } from "@mui/icons-material";

const TopHospitals = () => {

    const navigate = useNavigate();

    const handleCardClick = (id, name) => {
        const formattedName = encodeURIComponent(name); // Encode the name to make it URL-safe
        // console.log(`Navigating to: /top-hospitals/${formattedName}/details/${id}`); // Log the constructed URL
        navigate(`/top-hospitals/${formattedName}/details/${id}`);
    };

    const renderCards = () => {
        const cardDataList = [
            { hospital_id: 1, name: "Medanta The Medicity" },
            { hospital_id: 2, name: "Oplus Heart Center East Delhi" },
            { hospital_id: 3 },
            { hospital_id: 4 },
            { hospital_id: 5 },
            { hospital_id: 6 },
            { hospital_id: 7 },
            { hospital_id: 8 },             
        ];
        return (
            <Grid container spacing={5}>
            {cardDataList.map((cardData, index) => (
                    <Grid item xs={12} sm={12} md={6} key={index}>
                        <Cards
                        onClick={() => handleCardClick(cardData.hospital_id, cardData.name)}
                            sx={{
                                display: "flex",
                                cursor: "pointer",
                                borderRadius: "16px",
                                border: "2px solid #E2D7F1",
                                background: "#F7F1FF",
                                height: "100%",
                                // width: "105%",
                                boxShadow: "none",
                                // flexDirection: {
                                //     xs: "column", // Apply column layout for mobile
                                //     sm: "column", // Apply column layout for tablets
                                //     md: "row",    // Default to row layout for desktops
                                //     },
                                [theme.breakpoints.down("sm")]: {
                                    flexDirection: "column",
                                    marginLeft: "-20px",
                                    marginRight: "-20px",
                                },
                                // [theme.breakpoints.down("md")]: {
                                //     flexDirection: "column",
                                // }
                            }}
                        >
                            <Grid container sx={{ margin: "0px" }}>
                            {/* Image Section */}
                                {/* <Grid item xs={4}> */}
                                <Grid item xs={12} sm={6} display="flex" alignItems="center" justifyContent="center">
                                    <CardMedia
                                        component="img"
                                        // height="400"
                                        src="/hospitals.jpg"
                                        // image={hospitals}
                                        alt="Hospital"
                                        color="#000"
                                        sx={{ borderRadius: "8px", maxWidth: "98%", height: "97%", objectFit: "cover", filter: "saturate(1.3) hue-rotate(200deg) contrast(1)", }}
                                    />
                                </Grid>
                                {/* Content Section */}
                                {/* <Grid item xs={8}> */}
                                <Grid item xs={12} sm={6} sx={{ marginLeft: "-16px" }}>
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            height: "110%",
                                            width: "110%",
                                            // padding: "16px",
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" mt="-10px">
                                            <Typography
                                                variant="caption2"
                                                fontFamily={"Poppins"}
                                                fontWeight={"600"}
                                                noWrap
                                                sx={{
                                                    // fontSize: { xs: "12px", sm: "14px", md: "16px" },
                                                    fontSize: "caption2",
                                                    fontFamily: "Poppins",
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitBoxOrient: "vertical",
                                                    WebkitLineClamp: 2,
                                                    // whiteSpace: "nowrap",
                                                    whiteSpace: "normal",
                                                    textOverflow: "ellipsis",
                                                    width: "100%",
                                                    "&:hover": {
                                                        // overflow: "visible",
                                                        // display: "block",
                                                        WebkitLineClamp: 3,
                                                        // whiteSpace: "normal",
                                                        textOverflow: "clip",
                                                    },
                                                }}
                                            >
                                                Medanta The Medicity & Oplus Heart Center East Delhi
                                            </Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" mb={1}>
                                            <LocationOn style={{ color: "#00B29A", fontSize: "16px" }} />
                                            <Typography variant="caption2" style={{ color: "#00B29A" }}>
                                                3KM from your location
                                            </Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="space-between">
                                            <Typography variant="caption2" color="#727272">
                                                Timing
                                            </Typography>
                                            <Typography variant="caption2" color="#727272">
                                                Bed Charges
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ transform: 'rotate(90deg)', transformOrigin: 'center', ml: '37%', height: '1%', width: '20%', border: '1px solid #DBDDE0', borderWidth: '1px'}} />
                                        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                            <Typography variant="caption2" fontWeight={"600"}>
                                                10AM -11PM
                                            </Typography>
                                            <Typography variant="caption2" fontWeight={"600"}>
                                                ₹1500/Day
                                            </Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
                                            <Box display="flex" alignItems="center" backgroundColor={"#E1F2EF"} border={"1px solid #00B29A"} borderRadius={"5px"} p={1}>
                                                <Typography variant="caption2" fontWeight={"600"}>
                                                    4.8
                                                </Typography>
                                                <Star style={{ color: "#00B29A", fontSize: "16px" }} />
                                            </Box>
                                            <Typography variant="caption2" fontWeight={"600"} mx={1}>
                                                60 Reviews
                                            </Typography>
                                        </Box>
                                        {/* <Box mt="auto"> */}
                                        <Box sx={{ mt: "1" }}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "#00B29A",
                                                    // fontSize: { xs: "10px", sm: "12px", md: "14px" },
                                                    fontSize: "12px",
                                                    borderRadius: "8px",
                                                    color: "#fff",
                                                    textTransform: "none",
                                                    boxShadow: "none",
                                                    "&:hover": {
                                                        backgroundColor: "#00B29A",
                                                        boxShadow: "none",
                                                    },
                                                }}
                                                fullWidth
                                            >
                                                Book Now
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Cards>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Box sx={{ maxWidth: "1220px", mx: "auto" }}>
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                backgroundColor="#F7F7FF"
                alignItems="center"
                my={10}
                px={15}
                py={10}
                sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "30px", sm: "36px", md: "36px" },
                        fontWeight: "bold",
                        fontFamily: "PoppinsBold",
                    }}
                >
                    Find your top
                    <span
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            fontFamily: "PoppinsBold",
                            display: "block",
                            marginTop: "10px",
                        }}
                    >
                        Hospitals
                    </span>
                </Typography>
                {/* <Box sx={{ backgroundColor: '#F7F1FF' }}> */}
                <Box>
                    <img
                        // src={home_page_banner}
                        src="/home-page-banner.png"
                        width="350px"
                        alt="Find your top hospitals"
                        style={{ maxWidth: "100%", marginTop: "16px", objectFit: "cover", mixBlendMode: "luminosity" }}
                        // style={{ maxWidth: "100%", marginTop: "16px", objectFit: "cover", filter: "grayscale(100%)" }}
                    />
                </Box>
            </Box>
            <Container sx={{ backgroundColor: "#fff", px: 1 }}>
            {/* <Container sx={{ backgroundColor: "#F7F1FF", px: { xs: 2, sm: 4, md: 8 } }}> */}
                <Tabs
                    value={1}
                    sx={{
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#00B29A",
                            // height: "5px",
                            height: { xs: "3px", sm: "5px" },
                            borderRadius: "5px 5px 0 0",
                        },
                        "& .MuiTab-root": { color: "#000" },
                        "& .Mui-selected": { color: "#000 !important", fontWeight: "bold" },
                    }}
                >
                    <Tab label="All" />
                    <Tab label="Hospitals" />
                    <Tab label="Clinics" />
                </Tabs>
                <Divider
                    sx={{
                        borderWidth: '1px',
                        width: '100%',
                        // width: { xs: "100%", sm: "80%", md: "70%" },
                        marginTop: 0,
                        marginBottom: 7,
                        borderColor: theme.palette.divider,
                    }}
                />
                <Box my={2} mx={10}>
                    {renderCards()}
                </Box>
            </Container>
        </Box>
    );
};

export default TopHospitals;