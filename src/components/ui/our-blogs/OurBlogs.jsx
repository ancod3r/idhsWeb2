import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, Button, IconButton, Container } from '@mui/material';
import theme from '../../../theme';
import blogProfile from '../../../assets/images/blog-profile.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const HealthcareProgram = () => {
    const [showAllTopRatedDoctors, setShowAllTopRatedDoctors] = useState(false);
    const scrollContainerRef = useRef(null);

// Utility function to get the current date as 'dd MMMM yyyy'
const getDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    return formattedDate;
    };
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
    return formattedDate;
};
const currentDate = getDate();
// console.log(getDate());
// console.log(formatDate(currentDate));

    const profiles = [
        { blog: blogProfile, name: 'Neha Sharma', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Sarah Ellis', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Emily Hofstader', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Neha Sharma', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Shreya Ghoshal', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Amit Ranjan', date: formatDate(currentDate) },
        { blog: blogProfile, name: 'Ashish Kumar', date: formatDate(currentDate) },
    ];

    const images = [
        { src: "/blog.jpg", title: 'The secret to Oral hygiene How to decide what your mouth needs?', tag: 'Teeth . Hygiene . Gums . Toothpaste', speciality: 'The secret to Oral hygiene-How to decide what your mouth needs?' },
        { src: "/blog1.jpg", title: 'Healthy lifestyle Cheatsheet Best Practices and goals. Proven results!', tag: 'Health . Fit . Yoga . Exercise . Lifestyle', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: "/blog2.jpg", title: 'Are my daily use products damaging my health? How to check if products are healthy?', tag: 'Safe . Products . Health . Daily use items', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: "/blog.jpg", title: 'The secret to Oral hygiene-How to decide what your mouth needs?', tag: 'Teeth . Hygiene . Gums . Toothpaste', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: "/blog2.jpg", title: 'Healthy lifestyle Cheatsheet Best Practices and goals. Proven results!', tag: 'Health . Fit . Yoga . Exercise . Lifestyle', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: "/blog1.jpg", title: 'Are my daily use products damaging my health? How to check if products are healthy?', tag: 'Safe . Products . Health . Daily use items', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
        { src: "/blog.jpg", title: 'Heart care', tag: 'Hygiene . Health . Yoga . Exercise', speciality: 'The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn\'t produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.' },
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
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    marginX: { xs: 1, sm: 1, md: 1, lg: 1 },
                                    // fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                }}
                            >
                                <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Our</span>{' '}
                                <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Blogs</span>
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Scrollable Images Box Section */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 5,
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
                                        minHeight: 300,
                                        textAlign: 'left', 
                                        border: '1px solid #DBDDE0',
                                        padding: '0px', 
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                    }}>
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        style={{ objectFit: 'cover', width: '100%', height: '150px', borderRadius: '8px', }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mt: 3, 
                                            textAlign: 'left', 
                                            color: '#000',
                                            fontFamily: 'PoppinsBold',
                                            // width: '100%',
                                            marginLeft: '5%',
                                            // marginRight: '5%',
                                            // overflow: 'hidden',
                                            // textOverflow: 'ellipsis', 
                                        }}>
                                        {image.title}
                                    </Typography>

                                    {/* Profile Data Inline */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, marginLeft: '5%' }}>
                                    <img
                                        src={profiles[index % profiles.length].blog}
                                        alt={profiles[index % profiles.length].name}
                                        style={{ objectFit: 'cover', width: '30px', height: '30px', borderRadius: '50%', }}/>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography
                                        variant="caption2"
                                        sx={{
                                            color: '#7C8087',
                                            fontFamily: 'PoppinsBold',
                                            marginBottom: '4px',  
                                            }}
                                        >
                                        {profiles[index % profiles.length].name}
                                        </Typography>
                                        <Typography
                                        variant="caption2"
                                        sx={{
                                            color: '#7C8087',
                                            }}>
                                        {profiles[index % profiles.length].date}
                                        </Typography>
                                        </Box>
                                    </Box>
                        {/* Here I'll show Blog Profile Data
                        {profiles.map((profile, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: 200,
                                        textAlign: 'center',
                                        }}>
                                    <img
                                        src={profile.blog}
                                        alt={profile.name}
                                        style={{ objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%' }}
                                    />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                        // mt: 3,
                                        // textAlign: 'center',
                                        color: '#000',
                                        fontFamily: 'PoppinsBold',
                                        // width: '100%',
                                        }}>
                                        {profile.name}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                        // mt: 1,
                                        color: '#6C87AE',
                                        // fontFamily: 'Poppins',
                                        // width: '100%',
                                        }}>
                                        {profile.date}
                                    </Typography>
                                </Box>
                                ))} */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            // mt: 5,
                                        }}>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: '#A0A0A0',
                                                // fontFamily: 'PoppinsBold',
                                                // fontSize: '1rem',
                                                padding: '6px 16px',
                                            }}>
                                            {/* <span>&#x20B9;</span>{' '} */}
                                            {image.tag}
                                        </Typography>
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
