import React from 'react';
import { Typography, Box, IconButton, Stack } from '@mui/material';
import Contact from './Contact';

function GetApp() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom color="primary" align="center">Download App</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={1} alignItems="center">
          <IconButton
            href="https://play.google.com/store/apps/details?id=com.idhs.patient"
            aria-label='Google Play'
            target="_blank"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play" style={{ height: '30px' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom color="primary" align="center">
            Google Play
          </Typography>
        </Stack>
        <Stack spacing={1} alignItems="center" sx={{ my: 5, mx: 5 }}>
          <IconButton
            href="https://apps.apple.com/in/app/idhs-health-wellness/id6544813148"
            aria-label='Apple Store'
            target="_blank"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="App Store" style={{ height: '30px' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom color="primary" align="center">
            App Store
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ maxWidth: '700px' }}>
        <Contact />
      </Box>
    </Box>
  );
}

export default GetApp;
