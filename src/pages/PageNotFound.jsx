import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', overflow: 'hidden' }}>
      <Container maxWidth="xs">
        <Grid item xs={12} md={6}>
          <Box>
              <img
                src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                alt="Error 404"
                width="100%"
                height="auto"
              />
            </Box>
			<Typography variant="h3" sx={{ textAlign: 'center' }}>Page Not Found</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 10 }}>
            Sorry, but the page you're looking for doesn't exist.
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Link to="/">
            <Button variant="contained">Go Back Home</Button>
            </Link>
            </Box>
          </Grid>
      </Container>
    </Box>
  );
}

export default PageNotFound;
