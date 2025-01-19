import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import theme from '../../../theme';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const Wellness = () => {
  const [showAllWellness, setShowAllWellness] = useState(false);
  const scrollContainerRef = useRef(null);

  const images = [
    { src: '/wellness1.jpg', title: 'Vitamins' },
    { src: '/wellness2.jpg', title: 'Nutritional Drink' },
    { src: '/wellness3.jpg', title: 'Skin Care' },
    { src: '/wellness4.jpg', title: 'Wellness' },
    { src: '/wellness5.jpg', title: 'Sexual Wellness' },
    { src: 'https://via.placeholder.com/100', title: 'Wellness2' },
    // { src: 'https://via.placeholder.com/100', title: 'Wellness3' },
    // { src: 'https://via.placeholder.com/100', title: 'Wellness4' },
    // { src: 'https://via.placeholder.com/100', title: 'Wellness5' },
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
    <>
      {/* Background Image Box with */}
      <Box maxWidth="xl" sx={{
        backgroundImage: 'url(/background-wellness.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        }}>

      {/* Then after Semi-transparent overlay, Background Colored Box */}
      <Box maxWidth="xl" sx={{
        backgroundColor: 'rgba(30, 46, 133, 0.7)',
        minHeight: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
      {/* Then after Content Box Grid in most front */}
      <Grid container maxWidth="lg" sx={{
            backgroundColor: '#F9FBFC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            // minHeight: '50vh',
            borderRadius: 2,
            // zIndex: 2,
            width: { xs: '85%', sm: '91%', md: '79%' },
            [theme.breakpoints.up("xs")]: { paddingY: "50px", paddingX: "10px", width: '95%' },
            [theme.breakpoints.down("sm")]: { paddingY: "50px", paddingX: "10px", width: '99%' },
            [theme.breakpoints.down("md")]: { paddingY: "40px", paddingX: "10px", width: '85%' },
        }}>
          <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5" textAlign="center" gutterBottom sx={{ fontSize: { xs: "18px", sm: "20px", md: "32px" }, }}>
              <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Shop</span>{' '}
              <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>for Medicines & Wellness</span>{' '}
              <ShoppingCartIcon variant="outlined" fontSize='1rem' sx={{ verticalAlign: 'middle' }} />
            </Typography>
            <Typography variant="caption" sx={{ displey: 'inline-block', textAlign: 'center', color: '#10217D', opacity: 0.6, mb: 5, maxWidth: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
              [theme.breakpoints.down("sm")]: { paddingX: "0", },
              [theme.breakpoints.down("md")]: { paddingX: "0", },
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 200,
                  textAlign: 'center',
                  // [theme.breakpoints.down("sm")]: { minHeight: "5px", paddingX: "30px", marginX: "30px", },
                  // [theme.breakpoints.down("md")]: { minHeight: "5px", paddingX: "30px", marginX: "30px", },
                }}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={{ objectFit: 'cover', width: '190px', height: '190px', borderRadius: '8px', }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mt: 5,
                    color: '#527C88',
                    fontFamily: 'PoppinsBold',
                  }}>
                  {image.title}
                </Typography>
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
        <Box mt={4} sx={{ width: '95%', textAlign: 'right' }}>
          <Button
            variant="text"
            // onClick={() => setShowAllWellness((prev) => !prev)}
            onClick={viewAll}
            sx={{
              fontSize: '1rem',
              textDecoration: 'underline',
              color: '#527C88',
              display: 'inline-block',
              ':hover': { backgroundColor: '#F9FBFC' }
            }}>
            {showAllWellness ? 'Show Less' : 'View All'}
          </Button>
        </Box>
      </Grid>
      </Box>
    </Box>
</>
  );
};

export default Wellness;