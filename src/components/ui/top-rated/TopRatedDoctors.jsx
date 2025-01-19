import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, Button, IconButton, Container } from '@mui/material';
import theme from '../../../theme';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const TopRatedDoctors = () => {
  const [showAllTopRatedDoctors, setShowAllTopRatedDoctors] = useState(false);
  const scrollContainerRef = useRef(null);

  const images = [
    { src: '/doctor1.jpg', title: 'Dr Y K Mishra', speciality: 'Cardiac Surgeon, New Delhi, India sdegnurhnj, efjiunghrnguir' },
    { src: '/doctor2.jpg', title: 'Dr. Sandeep Vaishya', speciality: 'Neurosurgeon, Gurgaon, India' },
    { src: '/doctor6.jpg', title: 'Dr. Rajeev Verma', speciality: 'Orthopaedic and Joint Replacement Surgeon, New Delhi, India' },
    { src: '/doctor3.jpg', title: 'Dr. Ajay Kaul', speciality: 'Cardiac Surgeon, New Delhi, India' },
    { src: '/doctor4.jpg', title: 'Dr Naresh Terhan', speciality: 'Cardiac Surgeon, Gurgaon, India' },
    { src: '/doctor5.jpg', title: 'Dr Naresh Terhan', speciality: 'Cardiac Surgeon, Gurgaon, India' },
    { src: 'https://via.placeholder.com/100', title: 'Dr Vinod Raina', speciality: 'Medical Oncologist, Gurgaon, India' },
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
      <Box maxWidth="lg" sx={{ marginX: { xs: 5, sm: 5, md: 5, lg: 5 }, margin: "50px auto" }}>
        <Grid container sx={{
          // backgroundColor: '#F9FBFC',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'flex-start' }}>
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, textAlign: 'left' }}>
              <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Top Rated</span>{' '}
              <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Doctors</span>{' '}
              <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Near You</span>
            </Typography>
          </Grid>

          {/* Scrollable Images Box Section */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
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
                gap: 3,
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
                    // minWidth: 200,
                    minHeight: 380,
                    textAlign: 'left',
                    border: '1px solid #DBDDE0',
                    padding: '15px',
                    borderRadius: '8px',
                    backgroundColor: '#fff', // background for contrast
                  }}>
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{ objectFit: 'cover', width: '190px', height: '190px', borderRadius: '8px', }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      textAlign: 'left',
                      color: '#000',
                      fontFamily: 'PoppinsBold',
                      width: '100%',
                    }}>
                    {image.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      my: 1,
                      color: '#6C87AE',
                      fontFamily: 'Poppins',
                    }}>
                    {image.speciality}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      border: '2px solid #10217D',
                      borderRadius: '8px',
                      mt: 2,
                      color: '#10217D',
                      fontFamily: 'Poppins',
                      padding: '6px 16px',
                    }}>
                    Consult Now
                  </Button>
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

export default TopRatedDoctors;
