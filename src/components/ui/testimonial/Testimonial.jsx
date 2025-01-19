import React, { useState, useRef } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box, Grid, Typography, IconButton, Container } from '@mui/material';
import theme from '../../../theme';

const Testimonial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const images = [
    { src: '/our-patients.jpg', name:'Anjali Sharma', title: '“IDHS is an website and mobile app for you to feel better or get medical help. They offer you a 24/7 doctor service with Medicine Purchasing Facility”' },
    { src: '/our-patients1.jpg', name:'Anjali abcd', title: '“IDHS Pro is an website and mobile app for you to feel better or get medical help. They offer you a 24/7 doctor service with Medicine Purchasing Facility”' },
    { src: '/our-patients2.jpg', name: 'Hello World Hellooooo some', title: '“They offer you a 24/7 doctor service with Medicine Purchasing Facility”' },
    { src: '/our-patients3.jpg', name: 'Hello World Hellooooo some', title: '“MSFT Pro is an website and mobile app for you to feel better or get medical help. They offer you a 24/7 doctor service with Medicine Purchasing Facility”' },
    { src: '/wellness1.jpg', name: 'Hello World Hellooooo some', title: '“Purchasing”' },
    { src: '/background-image.jpg', name: 'Hello World Hellooooo some', title: '“Purchasing Facility' },
    { src: '/doctor6.jpg', name: 'Hello World Hellooooo some', title: '“Purchasing Facility Medicine”' },
    { src: '/doctor2.jpg', name: 'Hello World Hellooooo some', title: '“Purchasing Facility Machine World”' },
    { src: '/doctor3.jpg', name: 'Hello World Hellooooo some', title: '“Purchasing world”' },
    { src: '/wellness3.jpg', name: 'Hello World Hellooooo some', title: '“MSFT Pro is an website and mobile app for you to feel better or get medical help. They offer you a 24/7 doctor service with Medicine Purchasing Facility”' },
  ];

  const scroll = (direction) => {
    const newIndex = direction === 'left'
        ? Math.max(0, currentImageIndex - 1)
        : Math.min(images.length - 1, currentImageIndex + 1);
    setCurrentImageIndex(newIndex);
  };
  // const viewAll = () => {
  //   const container = scrollContainerRef.current;
  //   container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
  // };

  return (
        <Container>
            <Box maxWidth="lg" sx={{ marginX: { xs: 5, sm: 5, md: 5, lg: 5 }, margin: "-50px auto" }}>
                <Grid container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 10, sm: 10, md: 10, lg: 10 },
                    }}>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={5}>
              <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                      marginX: { xs: 1, sm: 1, md: 1, lg: 1 },
                      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.65rem', lg: '1.65rem' },
                  }}>
                  <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Our</span>{' '}
                  <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Patients</span>{' '}
                  <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Feedback</span>{' '}
                  <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>About Us</span>
              </Typography>
          </Grid>
          <Box sx={{
            backgroundColor: 'rgba(236, 238, 249)',
            minHeight: { xs: '150px', sm: '150px', md: '260px', lg: '260px' },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1px',
            }}></Box>
        {/* Scrollable Images Box Section */}
          <Box sx={{
            display: 'flex',
            mt: { xs: -30, sm: -30, md: -50, lg: -50 },
            width: '100%',
            }}>
          {/* Scrollable Images */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              alignItems: 'center',
              // alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
              flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
              justifyContent: 'center',
              gap: { xs: '20px', sm: '40px', md: '40px', lg: '40px' },
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              width: 'max-content',
              '::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              // paddingX: { xs: 2, sm: 3, md: 5 },
              // [theme.breakpoints.down("sm")]: { paddingX: "0", },
              // [theme.breakpoints.down("md")]: { paddingX: "0", },
            }}>
          {/* Left side Image */}
            {/* {images.map((image, index) => ( */}
              <Box
                // key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'auto',
                  marginLeft: '50px',
                }}>
                <Box sx={{ width: {xs: '160px', sm: '160px', md: '290px', lg: '290px'}, height: {xs: '160px', sm: '160px', md: '270px', lg: '270px'}, overflow: 'hidden', borderRadius: '8px', border: '2px solid #1BA9B5', }}>
                <Box
                component={'img'}
                src={images[currentImageIndex].src}
                alt='Our Patients'
                sx={{objectFit: 'cover', width: '95%', height: '95%', borderRadius: '8px', marginTop: '-5px', marginLeft: '-5px', position: 'absolute',
                [theme.breakpoints.up('xs')]: {width: '280px', height: '260px',}, 
                [theme.breakpoints.between('xs', 'sm')]: {width: '20px',height: '20px',},
                [theme.breakpoints.down('sm')]: {width: '280px',height: '260px',}, 
                [theme.breakpoints.down('md')]: {width: '150px',height: '150px',}, 
                }}>
                </Box>
                </Box>
              </Box>
                {/* Right Side Title */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'column', md: 'column' },
                  marginX: { xs: '0px', sm: '0px', md: '20px', lg: '100px', xl: '100px' },
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Typography
                    variant="body1"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem' },
                      fontStyle: 'italic',
                      // marginX: '100px',
                      color: '#121212',
                      fontFamily: 'manrope',
                      hyphens: 'auto',
                      wordWrap: 'break-word',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                      }}>
                        {images[currentImageIndex].title.split(' ').length > 20
                        ? images[currentImageIndex].title.split(' ').slice(0, 30).join(' ') + '...'
                        : images[currentImageIndex].title}
                      {/* {images[currentImageIndex].title} */}
                      </Typography>
                      {/* Our Patients Name */}
                <Box sx={{ 
                  display: 'flex',
                  marginTop: { xs: '20px', sm: '20px', md: '50px', lg: '100px', xl: '100px' },
                  marginRight: 'auto',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.60rem', sm: '0.80rem', md: '0.90rem', lg: '1rem', xl: '1.2rem' },
                    color: '#000',
                    fontWeight: 700,
                    fontFamily: 'manrope',
                  }}>{images[currentImageIndex].name}
                </Typography>
                <Typography
                  variant="caption2"
                  sx={{
                    fontSize: { xs: '0.55rem', sm: '0.70rem', md: '0.75rem', lg: '0.90rem', xl: '1rem' },
                    color: '#696969',
                    fontWeight: 700,
                    fontFamily: 'manrope',
                  }}>IDHS Customer
                </Typography>
              </Box>
                </Box>
          </Box>
          <Box sx={{ display: { xs: 'inline-block', sm: 'flex', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginTop: 'auto',
          marginLeft: 'auto',
          }}>
          {/* Left Arrow Icon */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{ opacity: 0.8, ':hover': { opacity: 1 }}}><KeyboardBackspaceIcon />
          </IconButton>
          {/* Right Arrow Icon */}
          <IconButton
            onClick={() => scroll('right')}
            sx={{ opacity: 0.8, transform: 'rotate(180deg)', ':hover': { opacity: 1 }}}><KeyboardBackspaceIcon />
          </IconButton>
          </Box>
        </Box>
      {/* View All Button */}
      {/* <Box sx={{ width: '100%', textAlign: 'right' }}>
          <Button
              variant="text"
              onClick={viewAll}
              sx={{
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  color: '#527C88',
                  ':hover': { backgroundColor: '#F9FBFC' }
              }}>
              {showAllTestimonial ? 'Show Less' : 'View All'}
          </Button>
      </Box> */}
      </Grid>
    </Box>
  </Container>
  );
};

export default Testimonial;