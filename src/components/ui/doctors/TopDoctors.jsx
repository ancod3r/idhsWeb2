import React from "react";
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import theme, { Cards } from "../../../theme"; 
import { useNavigate } from "react-router-dom";
// import home_page_banner from "../../../assets/images/home_page_banner.png";
// import doctor from "/doctors-card.jpg";
import { Star } from "@mui/icons-material";

// Sample data for small cards
const smallCardData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    image: "https://via.placeholder.com/80",
    text: `Card ${String.fromCharCode(65 + index)}`, // Generates text A-Z for each card
}));

// Sample data for doctor cards
const doctorCardData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    // image: "https://via.placeholder.com/300",
    // image: `${doctor}`,
    image: `/doctors-card.jpg`,
    name: `Dr Sukhram Bishnoi ${index + 1} Doctor Name Dr Sukhram Dr Sukhram.. ${index + 1}`,
    speciality: "Speciality",
    speciality1: `Cardiologist Surgeons, specialist in heart and only ${index + 1} heart specialist and and and ${index + 1}`,
    rating: 4.8,
    experience: "Experience",
    location: "Location",
}));

const TopDoctors = () => {
    // State to manage the visibility of the additional row of cards
    const [showMore, setShowMore] = React.useState(false);
    const navigate = useNavigate();

    // Function to handle the "View All" button click
    const handleViewAll = () => {
        setShowMore(!showMore);
    };

    const handleCardClick = (id) => {
        const selectedDoctor = doctorCardData.find((card) => card.id === id);
        navigate(`/top-doctors/details/${id}`, {
            state: { doctor: selectedDoctor },
        });
        // console.log("Card clicked:", id);
    };

    return (
        // <Container sx={{ background: "#ff0000" }}>
        <Container>
        <Box sx={{ maxWidth: "1220px", mx: "auto" }}>
            {/* Top section with title and image */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                backgroundColor="#F7F7FF"
                alignItems="center"
                my={10}
                mt={20}
                // mb={0}
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
                        Doctors
                    </span>
                </Typography>
                <Box>
                    <img
                        src="/home-page-banner.png"
                        // src={home_page_banner}
                        width="350px"
                        alt="Find your top Doctors"
                        style={{ maxWidth: "100%", marginTop: "16px", objectFit: "cover", mixBlendMode: "luminosity" }}
                    />
                </Box>
            </Box>

            {/* Doctors card section with image */}
            <Box sx={{ background: "#fff" , py: 10 }}>
                <Grid container spacing={5}>
                    {doctorCardData.map((doctor) => (
                        <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                            <Cards 
                            onClick={() => handleCardClick(doctor.id)}
                            sx={{ 
                                cursor: "pointer",
                                borderRadius: "8px",
                                border: "2px solid #E2D7F1",
                                // background: "#F7F1FF",
                                // height: "100%",
                                margin: "0px 15px 0px 15px",
                                boxShadow: "none",
                                display: "flex", 
                                flexDirection: "column",
                                height: "99%", 
                                [theme.breakpoints.down("sm")]: {
                                    height: "97%",
                                }
                                // overflow: "hidden",
                                }}>
                                <Box sx={{ position: "relative", width: "100%", paddingTop: "20px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: { xs: 200, sm: 300, md: 300 },
                                        objectFit: { xs: 'contain', sm: 'contain', md: 'contain', lg: 'contain' },
                                        // background: "#F7F1FF",
                                    }}
                                    image={doctor.image}
                                    alt={doctor.name}
                                />
                                {/* Rating overlay */}
                                <Box
                                    border={"1px solid #00B29A"}
                                    sx={{
                                        position: "absolute",
                                        // bottom: { xs: 20, sm: 40, md: 50, lg: 30 },
                                        bottom: 15,
                                        left: { xs: 5, sm: 10, md: 15 },
                                        backgroundColor: "#E1F2EF",
                                        borderRadius: "5px",
                                        padding: { xs: "2px 4px", sm: "4px 8px" },
                                        // padding: "4px 8px",
                                        display: "flex",
                                        alignItems: "center",
                                        zIndex: 1,
                                        }}
                                    >
                                        <Typography variant="body1" fontWeight={"600"}>{doctor.rating}</Typography>
                                        <Star sx={{ color: "#00B29A", fontSize: '1.5rem', marginLeft: 1 }} />
                                </Box>
                                </Box>
                                {/* </CardMedia> */}
                                <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                                    <Typography variant="h6" fontWeight="bold" fontFamily={"PoppinsBold"} mb={1}>
                                        {doctor.name}
                                    </Typography>
                                    <Typography variant="body1" fontWeight="bold" sx={{ color: theme.palette.secondary.main }} mb={3}>
                                        General Surgeon
                                    </Typography>
                                    <Typography variant="body1" fontWeight="bold" mb={3}>
                                        {doctor.speciality}
                                    </Typography>
                                    <Typography variant="body1" fontWeight="100" color="#727272" mb={5}>
                                        {doctor.speciality1}
                                    </Typography>
                                    <Box sx={{ mt: "1" }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#00B29A",
                                            // fontSize: { xs: "10px", sm: "12px", md: "14px" },
                                            // fontSize: "12px",
                                            borderRadius: "8px",
                                            color: "#fff",
                                            textTransform: "none",
                                            boxShadow: "none",
                                            // marginTop: "0 auto",
                                            "&:hover": { backgroundColor: "#00B29A", boxShadow: "none" },
                                        }}
                                        fullWidth
                                    >
                                        View Detail
                                    </Button>
                                    </Box>
                                </CardContent>
                            </Cards>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={5}
            >
                <Typography variant="h5" sx={{ color: "#7258bc" }}>
                    Speciality
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleViewAll}
                    sx={{ color: "#7258BC", "&:hover": { color: "#7258BC" } }}
                >
                    {showMore ? "Show Less" : "View All"}
                </Button>
            </Box> */}

            {/* Small Cards Section */}
            {/* <Box>
                <Box
                    sx={{ overflowX: showMore ? "hidden" : "auto", whiteSpace: showMore ? "normal" : "nowrap" }}>
                    <Grid
                        container
                        spacing={5}
                        my={5}
                        sx={{
                            display: "flex",
                            flexWrap: showMore ? "wrap" : "nowrap",
                        }}
                    >
                        {smallCardData.slice(0, showMore ? 20 : 10).map((card) => (
                            <Grid
                                item
                                key={card.id}
                                sx={{ flex: {
                                        xs: showMore ? "0 0 33.33%" : "0 0 auto",
                                        md: "0 0 10%",
                                    },
                                    width: { xs: showMore ? "100%" : 120, md: "auto" },
                                }}
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="80"
                                        image={card.image}
                                        alt={`Small card ${card.id}`}
                                    />
                                    <CardContent sx={{ my: -1, textAlign: "center" }}>
                                        <Typography variant="body1">{card.text}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box> */}
            </Box>
        </Container>
    );
};

export default TopDoctors;