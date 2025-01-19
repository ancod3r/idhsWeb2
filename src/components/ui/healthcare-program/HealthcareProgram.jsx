import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, Button, IconButton, Container } from '@mui/material';
import theme from '../../../theme';
import heart from '../../../assets/images//topcare/heart.png';
import hearta from '../../../assets/images//topcare/hearta.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { fontWeight } from '@mui/system';

const HealthcareProgram = () => {
    const [showAllTopRatedDoctors, setShowAllTopRatedDoctors] = useState(false);
    const scrollContainerRef = useRef(null);

    const images = [
        { src: heart, title: 'Complete Nutrition', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: hearta, title: 'Heart care', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: heart, title: 'Diabetics Care', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: hearta, title: 'Diabetics Care', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: heart, title: 'Complete Nutrition', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: hearta, title: 'Complete Nutrition', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: heart, title: 'Heart care', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    };

    const viewAll = () => {
        const container = scrollContainerRef.current;
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    };

    return (
        <Container>
            <Box maxWidth="lg" sx={{ marginX: { xs: 5, sm: 5, md: 5, lg: 5 }, margin: "70px auto" }}>
                <Grid container sx={{
                    // backgroundColor: '#F9FBFC',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    marginX: { xs: 1, sm: 1, md: 1, lg: 1 },
                                    // fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                }}
                            >
                                <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Healthcare</span>{' '}
                                <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Programs</span>
                            </Typography>
                        </Grid>

                        <Grid item xs={6} sm={6} md={6}>
                            <Typography
                                variant="caption2"
                                gutterBottom
                                sx={{
                                    // alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    // marginLeft: { xs: 2, sm: 2, md: 2, lg: 2 },
                                    fontSize: { xs: '0.55rem', sm: '0.65rem', md: '0.75rem' },
                                    // marginLeft: 'auto',
                                    color: '#6C87AE',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                Healthcare helps people maintain good health and prevent illness. Regular check-ups, vaccinations, and screenings can catch health issues early and prevent them from becoming more serious.
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Scrollable Images Box Section */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 10,
                        position: 'relative',
                        width: '100%',
                    }}>
                        {/* Left Arrow Icon */}
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: 20,
                                zIndex: 10,
                                opacity: 0.5,
                                ':hover': { opacity: 1, backgroundColor: '#f0f0f0' },
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                            }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>

                        {/* Scrollable Images */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 5,
                                overflowX: 'auto',
                                paddingX: 0,
                                scrollBehavior: 'smooth',
                                '::-webkit-scrollbar': { display: 'none' },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            {images.map((image, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        minWidth: 300,
                                        minHeight: 280,
                                        textAlign: 'left',
                                        border: '1px solid #DBDDE0',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                    }}>
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        style={{ objectFit: 'cover', width: '50px', height: '50px', borderRadius: '8px', marginLeft: '5%', marginTop: '5%' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 3,
                                            textAlign: 'left',
                                            color: '#000',
                                            fontFamily: 'PoppinsBold',
                                            width: '100%',
                                            marginLeft: '5%',
                                        }}>
                                        {image.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            my: 1,
                                            marginLeft: '5%',
                                            marginRight: '5%',
                                            color: '#6C87AE',
                                            fontFamily: 'Poppins',
                                            display: 'inline-block',  // To treat it as a block element
                                            //   maxWidth: '80%',  // set this to whatever value fits your layout
                                            //   whiteSpace: 'nowrap',  // Prevent text from wrapping
                                            //   overflow: 'hidden',  // Hide overflowed content
                                            //   textOverflow: 'ellipsis',  // Apply the ellipsis for overflowing text
                                        }}>
                                        {image.speciality.split(' ').slice(0, 20).join(' ')}{image.speciality.split(' ').length > 20 ? '...' : ''}
                                        {/* {image.speciality} */}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            mt: 5,
                                        }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#1BA9B5',
                                                fontFamily: 'PoppinsBold',
                                                // fontSize: '1rem',
                                                padding: '6px 16px',
                                            }}>
                                            <span>&#x20B9;</span>{' '}999/-
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                border: '2px solid #10217D',
                                                borderRadius: '8px',
                                                color: '#10217D',
                                                fontFamily: 'Poppins',
                                                padding: '6px 16px',
                                            }}>
                                            Book Now
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Right Arrow Icon */}
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: 20,
                                zIndex: 10,
                                opacity: 0.5,
                                transform: 'rotate(180deg)',
                                ':hover': { opacity: 1, backgroundColor: '#f0f0f0' },
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                            }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>
                    </Box>

                    {/* View All Button */}
                    <Box mt={4} sx={{ width: '100%', textAlign: 'right' }}>
                        <Button
                            variant="text"
                            onClick={viewAll}
                            sx={{
                                fontSize: '1rem',
                                textDecoration: 'underline',
                                color: '#527C88',
                                // display: 'inline-block',
                                ':hover': { backgroundColor: '#F9FBFC' }
                            }}>
                            {showAllTopRatedDoctors ? 'Show Less' : 'View All'}
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Container>
    );
};

export default HealthcareProgram;
