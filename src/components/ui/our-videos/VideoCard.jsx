import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const VideoCard = ({ title, videoUrl }) => {
  // Extract the YouTube video ID from the URL
  const videoId = videoUrl.split('v=')[1].split('&')[0];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* Embed YouTube video using iframe */}
        <iframe
          width="100%"  // Ensures the iframe takes the full width of the Card
          height="200"  // You can adjust the height as per your design
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
