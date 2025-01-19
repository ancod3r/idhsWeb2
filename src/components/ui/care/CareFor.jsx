import React, { useState } from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import heart from '../../../assets/images//topcare/heart.png';
import hearta from '../../../assets/images//topcare/hearta.png';
import theme, { ExpandMore } from '../../../theme';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";

const CareFor = () => {
    const [showAllTopCare, setShowAllTopCare] = useState(false);
    const [showAllSeasonalCare, setShowAllSeasonalCare] = useState(false);

    const topCareData = [
        { id: 1, name: "1Heart Kidney Liver abcd efghtio", imgSrc: hearta },
        { id: 2, name: "2Asthma Heart Lungs", imgSrc: hearta },
        { id: 3, name: "3Lungs", imgSrc: hearta },
        { id: 4, name: "4Oxygen", imgSrc: hearta},
        { id: 5, name: "5Diabetes", imgSrc: hearta},
        { id: 6, name: "6Prescribe", imgSrc: hearta},
        { id: 7, name: "7Oxygen", imgSrc: hearta},
        { id: 8, name: "8Heart", imgSrc: hearta},
        { id: 9, name: "9Diabetes", imgSrc: hearta},
        { id: 10, name: "10Asthma", imgSrc: hearta},
        { id: 11, name: "11Lungs", imgSrc: hearta},
        { id: 12, name: "12Heart", imgSrc: hearta},
        { id: 13, name: "13Liver", imgSrc: hearta},
        { id: 14, name: "14Kidney", imgSrc: hearta},
        { id: 15, name: "15Brain", imgSrc: hearta},
        { id: 16, name: "16Pancreas", imgSrc: hearta},
    ];

    const seasonalCareData = [
        { id: 1, name: "1Cold", imgSrc: heart },
        { id: 2, name: "2Flu", imgSrc: heart },
        { id: 3, name: "3Allergy", imgSrc: heart },
        { id: 4, name: "4Heart", imgSrc: heart },
        { id: 5, name: "5Brain", imgSrc: heart },
        { id: 6, name: "6Asthma", imgSrc: heart },
        { id: 7, name: "7Diabetes", imgSrc: heart },
        { id: 8, name: "8Kidney", imgSrc: heart },
        { id: 9, name: "9Prescribe", imgSrc: heart },
        { id: 10, name: "10Liver", imgSrc: heart },
        { id: 11, name: "11Brain", imgSrc: heart },
        { id: 12, name: "12Kidney", imgSrc: heart },
        { id: 13, name: "13Foot", imgSrc: heart },
        { id: 14, name: "14Bone", imgSrc: heart },
        { id: 15, name: "15Allergy", imgSrc: heart },
        { id: 15, name: "16Asthma", imgSrc: heart },
    ];
    const renderCards = (data, showAll) => {
        const displayedData = showAll ? data : data.slice(0, 12);
        return (
                <Grid container spacing={{ xs: 2, sm: 2, md: 5 }} justifyContent="center"
                // <Grid container spacing={5}
                // sx={{
                // display: "flex",
                // flexWrap: showAll ? "wrap" : "nowrap",
                // overflowX: showAll ? "visible" : "auto",
                // }}
                sx={{
                display: "flex",
                [theme.breakpoints.down("sm")]: {
                    flexWrap: showAll ? "wrap" : "nowrap",
                    overflowX: showAll ? "visible" : "auto",
                    justifyContent: "normal",
                },
                [theme.breakpoints.down("md")]: {
                    flexWrap: showAll ? "wrap" : "nowrap",
                    overflowX: showAll ? "visible" : "auto",
                    justifyContent: "normal",
                },
                [theme.breakpoints.up("md")]: {
                    flexWrap: "wrap",
                    overflowX: "visible",
                },
                }}>
                {displayedData.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
                        <Card sx={{ display: 'flex', boxShadow: 'none', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'rgba(27, 169, 181, 0.2)', height: '100px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            {/* Image */}
                            <Box sx={{ width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', overflow: 'hidden',}}>                 
                                <CardMedia
                                    component="img"
                                    sx={{ width: '60%', height: '60%', objectFit: 'cover' }}
                                    image={item.imgSrc}
                                    alt={item.name}
                                />
                                </Box>
                                <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '0 16px', whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '120px', height: '100%', }}>
                                {/* <CardContent sx={{ textAlign: 'center', padding: '0', marginTop: '1', }}> */}
                                    <Typography variant="body1"
                                    sx={{
                                        color: 'rgba(82, 124, 136, 0.9)',
                                        fontFamily: 'Poppins',
                                        marginTop: '20px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        lineHeight: 1.5,
                                        maxWidth: '100%',
                                        // marginRight: '1px',
                                        // fontWeight: 'bold',
                                        // whiteSpace: 'nowrap',
                                        textAlign: 'center',
                                        maxHeight: '4.5rem',
                                    }}>
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginX: { xs: 5, sm: 5, md: 5, lg: 5 }, margin: "0 auto" }}>
            {/* Top Care For Section */}
            <Box my={10} fontFamily={'PoppinsBold'}>
                <Typography variant="h1" gutterBottom sx={{ marginBottom: 10, fontFamily: 'PoppinsBold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Top</span>
                <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}> Care For</span>
                </Typography>
                {renderCards(topCareData, showAllTopCare)}
                {topCareData.length > 5 && (
                    <Box textAlign="right" mt={3}>
                        <Button
                            variant="text"
                            sx={{ fontSize: { xs: '0.75rem', sm: '1rem' }, textDecoration: 'underline', color: '#527C88' }}
                            onClick={() => setShowAllTopCare(!showAllTopCare)}
                        >
                            {showAllTopCare ? "Show Less" : "View All"}
                        </Button>
                        {/* <ExpandMore
                            expand={showAllTopCare}
                            onClick={() => setShowAllTopCare(!showAllTopCare)}>
                            <ExpandMoreIcon />
                        </ExpandMore> */}
                    </Box>
                )}
            </Box>

            {/* Seasonal Care For Section */}
            <Box fontFamily={'PoppinsBold'}>
                <Typography variant="h1" gutterBottom sx={{ marginBottom: 10, fontFamily: 'PoppinsBold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Seasonal</span>
                <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}> Care For</span>
                </Typography>
                {renderCards(seasonalCareData, showAllSeasonalCare)}
                {seasonalCareData.length > 5 && (
                    <Box textAlign="right" mt={3}>
                        <Button
                            variant="text"
                            sx={{ fontSize: { xs: '0.75rem', sm: '1rem' }, textDecoration: 'underline', color: '#527C88' }}
                            onClick={() => setShowAllSeasonalCare(!showAllSeasonalCare)}
                        >
                            {showAllSeasonalCare ? "Show Less" : "View All"}
                        </Button>
                        {/* <ExpandMore
                            expand={showAllSeasonalCare}
                            onClick={() => setShowAllSeasonalCare(!showAllSeasonalCare)}>
                            <ExpandMoreIcon />
                        </ExpandMore> */}
                    </Box>
                )}
            </Box>
        </Box>
        </Container>
    );
};

export default CareFor;
